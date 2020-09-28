const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Property = require('../../models/Property');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const { findOneAndUpdate } = require('../../models/User');

// @route  POST api/property
// @desc   Create Property
// @access Private *token needed*
router.post('/',
    [
        auth,
        [
            check('location', 'Must if you are an agent or not')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id)
                .select('-password');
            const profile = await Profile.findOne({ user: req.user.id })
            const agent = profile.agent

            const {
                location,
                image,
                street,
                sqft,
                price,
                bathroom,
                bedroom,
            } = req.body

            //Create Property Object
            const newProperty = new Property({
                user: req.user.id,
                name: user.name,
                agent: profile.agent,
                _id: req.user._id,
                location,
                image,
                street,
                sqft,
                price,
                bathroom,
                bedroom,
            });

            //Create nonAgent Object
            const nonAgent = new Property({
                user: req.user.id,
                name: user.name,
                agent: profile.agent,
                _id: req.user._id,
            });

            if (agent == true) {
                const property = await newProperty.save();
                res.json(property)
                console.log(property)
            } else {
                return res.json(nonAgent)
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


// @route  GET api/property
// @desc   Get all properties
// @access Private *token needed*
router.get('/', auth, async (req, res) => {
    try {
        const properties = await Property.find().sort({ date: -1 })
        res.json(properties)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

// @route  GET api/property/:id
// @desc   Get properties by ID
// @access Private *token needed*
router.get('/:id', auth, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(400).json({ msg: 'Property not found' });
        }
        
        res.json(property)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Property not found' });
        }
        res.status(500).send('Server Error');
    }
}
);


module.exports = router;