const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

const Agent = require('../../models/Agents');
const User = require('../../models/User');

// @route  GET api/agents/me
// @desc   Get curent agents profile
// @access Private *token needed*
router.get('/me', auth, async (req, res) => {
    try {
        const agent = await Agent.findOne({ user: req.user.id }).populate('user', ['name', 'isAgent']);

        if (!agent) {
            return res.status(400).json({ msg: 'Agent does not exist' })
        }

        res.json(agent)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;