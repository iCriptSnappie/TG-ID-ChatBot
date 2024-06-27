const { MongoClient } = require('mongodb');
const { Telegraf } = require('telegraf');
const { parseMode } = require('telegraf/markup');

const config = require('./config');

const winston = require('winston');

// Setup logging configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MMM-YY HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => `[${timestamp} - ${level}] - ${message}`)
  ),
  transports: [
    new winston.transports.File({ filename: 'log.txt' }),
    new winston.transports.Console()
  ]
});

logger.log('info', 'Initializing ChatBot bot');

// MongoDB setup
const mongoClient = new MongoClient(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

async function connectToMongo() {
  await mongoClient.connect();
  db = mongoClient.db('Anonymous');
  logger.log('info', 'Connected to MongoDB');
}

// Telegram bot setup
const bot = new Telegraf(config.API_ID, config.API_HASH);

bot.use((ctx, next) => {
  ctx.db = db;
  ctx.logger = logger;
  return next();
});

bot.start(async (ctx) => {
  const me = await ctx.telegram.getMe();
  ctx.id = me.id;
  ctx.name = `${me.first_name} ${me.last_name || ''}`;
  ctx.username = me.username;
  ctx.mention = me.username ? `@${me.username}` : '';
});

bot.catch((err, ctx) => {
  logger.error(`Telegraf Error for ${ctx.updateType}`, err);
});

// Start the bot
(async () => {
  try {
    await connectToMongo();
    await bot.launch({
      sessionString: config.STRING_SESSION,
      inMemory: true,
      parseMode: parseMode.DEFAULT
    });
    logger.log('info', 'ChatBot started successfully');
  } catch (err) {
    logger.error('Error starting ChatBot ', err);
  }
})();