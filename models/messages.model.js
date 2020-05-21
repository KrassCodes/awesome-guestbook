const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const messagesSchema = new Schema({
    name: { type: String, required: true },
    message: { type: String, required: true }
});
const Messages = mongoose.model('message',messagesSchema);
module.exports = Messages;



