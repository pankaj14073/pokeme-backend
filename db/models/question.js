var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questionSchema = new Schema({
    receiverUser: { type: Schema.Types.ObjectId, ref: 'User' },
    senderUser: { type: Schema.Types.ObjectId, ref: 'User' },
    isAnonymous: Boolean,
    content: String,
    reply: String,
    replyAt: Date,
    createdAt: Date,
    updatedAt: Date
});

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;