const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    title: String,
    subject: String,
    startDate: Date,
    endDate: Date,
    maxNumber: Number,
    currNumber: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Session', SessionSchema);