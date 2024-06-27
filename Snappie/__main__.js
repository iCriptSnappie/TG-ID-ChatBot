const { promisify } = require('util');
const importModule = promisify(require);
const { SnappieBot } = require('./Snappie');
const { LOGGER } = require('./Snappie');
const { ALL_MODULES } = require('./Snappie/modules');

async function anonyBoot() {
    try {
        await SnappieBot.start();
    } catch (ex) {
        LOGGER.error(ex);
        process.exit(1);
    }

    for (const allModule of ALL_MODULES) {
        try {
            await importModule(`./Snappie/modules/${allModule}`);
        } catch (ex) {
            LOGGER.error(`Error importing module ${allModule}: ${ex}`);
        }
    }

    LOGGER.info(`@${SnappieBot.username} Started.`);
}

if (require.main === module) {
    anonyBoot().then(() => {
        LOGGER.info('Stopping ChatBot...');
        process.exit(0);
    });
}