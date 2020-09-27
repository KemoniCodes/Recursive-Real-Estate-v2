const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator')

const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route  GET api/profile/me
// @desc   Get curent users profile
// @access Private *token needed*
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'email']
        );

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user!' })
        }

        res.json(profile)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/',
    [auth,
        [
            check('agent', 'Please state if you are an agent')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            jobtitle,
            phone,
            photo,
            agent,
        } = req.body;

        //Build profile Object 
        const profileFields = {
            user: req.user.id,
            jobtitle,
            phone,
            photo,
            agent,
        };

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            if (profile) {
                //Update user profile
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true });

                return res.json(profile);
            }

            //Create user profile
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'email']);
        res.json(profiles)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'email']);

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile)
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            res.status(400).json({ msg: 'Profile is not found' });

        }
        res.status(500).send('Server Error');
    }
})


module.exports = router;