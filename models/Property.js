const mongoose = require('mongoose');
const { schema } = require('./User');
const Schema = mongoose.Schema

const PropertySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    agent: {
        type: Schema.Types.Boolean,
        ref: 'profile'
    },
    saves: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    image: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    sqft: {
        type: String,
        required: true
    },
    bedroom: {
        type: String,
        required: true
    },
    bathroom: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Property = mongoose.model('property', PropertySchema);

//IF AGENT YOU CAN ADD NEW PROPERTIES AND SAVE THEM
    //IF NOT AGENT AND JUST A USER, YOU CAN ONLY SAVE PROPERTIES YOU LIKE TO YOUR PROFILE

//IMAGE -string
// STREET ADDRESS NAME - STRING
//CITY & STATE & ZIPCODE - STRING
//PRICE - STRING
//SQFT
//BEDROOMS
//BATHROOMS