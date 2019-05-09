const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Blueprint of what a message would look like in our DB.
const MessageSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Makes a model of the above schema.
const Message = mongoose.model("Message", MessageSchema);

// Exporting the model so that it can be used in server.js and/or other files.
module.exports = Message;