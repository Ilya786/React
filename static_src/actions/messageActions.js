export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (text) => ({
    type: SEND_MESSAGE,
    text,
});

export const REPLY_MESSAGE = '@@message/REPLY_MESSAGE';

export const replyMessage = () => ({
    type: REPLY_MESSAGE,
});