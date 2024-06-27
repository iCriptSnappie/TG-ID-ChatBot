const { InlineKeyboardButton } = require('pyrogram/types');
const { SUPPORT_GRP, UPDATE_CHNL, OWNER, VenomX } = require('./config');

const DEV_OP = [
    [
        new InlineKeyboardButton("🥀 ᴏᴡɴᴇʀ 🥀", OWNER),
        new InlineKeyboardButton("✨ ꜱᴜᴘᴘᴏʀᴛ ✨", `https://t.me/${SUPPORT_GRP}`),
    ],
    [
        new InlineKeyboardButton(
            "😍 ᴀᴅᴅ ᴍᴇ ʙᴀʙʏ 😍",
            `https://t.me/${VenomX.username}`,
        ),
    ],
    [
        new InlineKeyboardButton("🚀 ʜᴇʟᴘ & ᴄᴍᴅs 🚀", "HELP"),
    ],
    [
        new InlineKeyboardButton("❄️ sᴏᴜʀᴄᴇ ❄️", "SOURCE"),
        new InlineKeyboardButton("☁️ ᴀʙᴏᴜᴛ ☁️", "ABOUT"),
    ],
];

const PNG_BTN = [
    [
        new InlineKeyboardButton(
            "😍 ᴀᴅᴅ ᴍᴇ ʙᴀʙʏ 😍",
            `https://t.me/${VenomX.username}`,
        ),
    ],
    [
        new InlineKeyboardButton(
            "✨ ᴄʟᴏsᴇ ✨",
            "CLOSE",
        ),
    ],
];

const BACK = [
    [
        new InlineKeyboardButton("✨ ʙᴀᴄᴋ ✨", "BACK"),
    ],
];

const HELP_BTN = [
    [
        new InlineKeyboardButton("🐳 ᴄʜᴀᴛʙᴏᴛ 🐳", "CHATBOT_CMD"),
        new InlineKeyboardButton("🎄 ᴛᴏᴏʟs 🎄", "TOOLS_DATA"),
    ],
    [
        new InlineKeyboardButton("✨ ʙᴀᴄᴋ ✨", "BACK"),
        new InlineKeyboardButton("❄️ ᴄʟᴏsᴇ ❄️", "CLOSE"),
    ],
];

const CLOSE_BTN = [
    [
        new InlineKeyboardButton("❄️ ᴄʟᴏsᴇ ❄️", "CLOSE"),
    ],
];

const CHATBOT_ON = [
    [
        new InlineKeyboardButton("ᴇɴᴀʙʟᴇ", "addchat"),
        new InlineKeyboardButton("ᴅɪsᴀʙʟᴇ", "rmchat"),
    ],
];

const MUSIC_BACK_BTN = [
    [
        new InlineKeyboardButton("sᴏᴏɴ", "soom"),
    ],
];

const S_BACK = [
    [
        new InlineKeyboardButton("🐳 ʙᴀᴄᴋ 🐳", "SBACK"),
        new InlineKeyboardButton("🌲 ᴄʟᴏsᴇ 🌲", "CLOSE"),
    ],
];

const CHATBOT_BACK = [
    [
        new InlineKeyboardButton("✨ ʙᴀᴄᴋ ✨", "CHATBOT_BACK"),
        new InlineKeyboardButton("❄️ ᴄʟᴏsᴇ ❄️", "CLOSE"),
    ],
];

const HELP_START = [
    [
        new InlineKeyboardButton("🚀 ʜᴇʟᴘ 🚀", "HELP"),
        new InlineKeyboardButton("🐳 ᴄʟᴏsᴇ 🐳", "CLOSE"),
    ],
];

const HELP_BUTN = [
    [
        new InlineKeyboardButton(
            "🚀 ʜᴇʟᴘ 🚀", `https://t.me/${VenomX.username}?start=help`
        ),
        new InlineKeyboardButton("🐳 ᴄʟᴏsᴇ 🐳", "CLOSE"),
    ],
];

const ABOUT_BTN = [
    [
        new InlineKeyboardButton("🎄 sᴜᴘᴘᴏʀᴛ 🎄", `https://t.me/${SUPPORT_GRP}`),
        new InlineKeyboardButton("🚀 ʜᴇʟᴘ 🚀", "HELP"),
    ],
    [
        new InlineKeyboardButton("🍾 ᴏᴡɴᴇʀ 🍾", OWNER),
        new InlineKeyboardButton("❄️ sᴏᴜʀᴄᴇ ❄️", "SOURCE"),
    ],
    [
        new InlineKeyboardButton("🐳 ᴜᴘᴅᴀᴛᴇs 🐳", `https://t.me/${UPDATE_CHNL}`),
        new InlineKeyboardButton("✨ ʙᴀᴄᴋ ✨", "BACK"),
    ],
];

module.exports = {
    DEV_OP,
    PNG_BTN,
    BACK,
    HELP_BTN,
    CLOSE_BTN,
    CHATBOT_ON,
    MUSIC_BACK_BTN,
    S_BACK,
    CHATBOT_BACK,
    HELP_START,
    HELP_BUTN,
    ABOUT_BTN,
};
