const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    agent: {
        type: Boolean,
        default: false,
        required: true
    },
    photo: {
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
    }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

//AGENT
    //IMG
    //NAME
    //OCCUPATION TITLE
    //PHONE NUMBER
    //EMAIL ADRESS