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
        ref: 'profile',
        default: false,
        required: true,
    },
    name: {
        type: String
    },
    saves: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            date: {
                type: Date,
                default: Date.now
            },
            name: {
                type: String
            }
        }
    ],
    image: {
        type: String,
    },
    street: {
        type: String,
    },
    location: {
        type: String,
        // required: true
    },
    price: {
        type: String,
    },
    sqft: {
        type: String,
    },
    bedroom: {
        type: String,
    },
    bathroom: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    },
},
);

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