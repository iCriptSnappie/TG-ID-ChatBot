const { ChatMemberStatus } = require('pyrogram/enums');
const { OWNER, SnappieBot } = require('./Snappie');
const { inline } = require('./inline'); // Assuming inline.js exports are structured properly
const { read } = require('./read'); // Assuming read.js exports are structured properly

function is_admins(func) {
    return async function non_admin(c, m) {
        if (m.from_user.id === OWNER) {
            return await func(c, m);
        }

        const admin = await c.get_chat_member(m.chat.id, m.from_user.id);
        if (
            admin.status === ChatMemberStatus.OWNER ||
            admin.status === ChatMemberStatus.ADMINISTRATOR
        ) {
            return await func(c, m);
        }
    };
}

module.exports = {
    is_admins,
    inline,
    read,
};