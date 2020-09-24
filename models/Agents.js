const mongoose = require('mongoose');
const Schema = mongoose.Schema
const AgentsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    agent: {
        type: Schema.Types.Boolean,
        ref: 'user'
    },
    avatar: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

});

module.exports = Agents = mongoose.model('agents', AgentsSchema);

//AGENT
    //IMG
    //NAME
    //OCCUPATION TITLE
    //PHONE NUMBER
    //EMAIL ADRESS