const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },

});


const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        //store file
        cb(null, true)
    } else {
        //reject file
        cb(null, false)
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter

});

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
        ],
        upload.single('photo')
    ],
    async (req, res) => {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            jobtitle,
            phone,
            agent,
            email,
            // photo,
            saves
        } = req.body;

        //Build profile Object 
        const profileFields = {
            user: req.user.id,
            jobtitle,
            phone,
            photo: req.body.photo || req.file.path,
            agent,
            email,
            saves
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
});


// @route    DELETE api/profile
// @desc     Delete profile, user, and posts(properties)
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {
        //@todo - remove users posts

        //Remove Profile
        await Profile.findOneAndRemove({ user: req.user.id });

        //Remove user
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User has been deleted.' })

    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            res.status(400).json({ msg: 'Profile is not found' });
        }
        res.status(500).send('Server Error');
    }
});


module.exports = router;