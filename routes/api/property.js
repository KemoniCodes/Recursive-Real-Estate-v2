const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        //store file
        cb(null, true)
    } else {
        //reject file
        cb(null, false)
    }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

const Property = require('../../models/Property');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
// const { findOneAndUpdate } = require('../../models/User');


// @route  POST api/property
// @desc   Create Property
// @access Private *token needed*
router.post('/',
    [
        auth,
        [
            check('image', 'Must if you are an agent or not')
                .not()
                .isEmpty()
        ],
        upload.single('image')
    ],
    async (req, res) => {
        // console.log(req.file);

        const errors = validationResult(req.file);
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
                image: req.file.originalname,
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
                // console.log(property)
            } else if (agent == false) {
                return res.json(nonAgent)
            }

            //@todo: IF NOT AGENT ADD PROPERTY SAVES TO PROFILE

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


// @route  DELETE api/property/:id
// @desc   Delete a property
// @access Private *token needed*
router.delete('/:id', auth, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)

        //Check if property exists
        if (!property) {
            return res.status(400).json({ msg: 'Property not found' });
        }

        //Check user
        if (property.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await property.remove();

        res.json({ msg: 'Property removed' })
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Property not found' });
        }
        res.status(500).send('Server Error');
    }
}
);


// @route  PUT api/property/save/:id
// @desc   Save a property
// @access Private *token needed*
router.put('/save/:id', auth, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        //Check if property has already been saved by this user
        if (property.saves.filter(save => save.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Property already saved' });
        }
        property.saves.unshift({ user: req.user.id });

        await property.save();

        res.json(property.saves)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});


// @route  PUT api/property/unsave/:id
// @desc   Unsave a property
// @access Private *token needed*
router.put('/unsave/:id', auth, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        //Check if property has already been saved by this user
        if (property.saves.filter(save => save.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Property not saved' });
        }

        //Get remove index
        const removeIndex = property.saves.map(save => save.user.toString()).indexOf(req.user.id);

        property.saves.splice(removeIndex, 1);

        await property.save();

        res.json(property.saves);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;