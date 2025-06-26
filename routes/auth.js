const express = require('express');
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.json({ message: "admin created" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/login', async (req, res) => {
   const { username, password } = req.body;
   try {
       const user = await User.findOne({ username });
       console.log("user =>", user)
        if (!user)
          return res.status(400).json({ error: 'Invalid username or password' });
        const isMatch = await user.comparePassword(password);
        console.log("isMatch", isMatch)
        if (!isMatch)
          return res.status(400).json({ error: 'Invalid username or password' });
    
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
    
});

module.exports = router;
