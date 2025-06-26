const express = require('express')
const Staff =  require('../models/Staff')
const auth = require("../middleware/authMiddleware")
const router = express.Router()

router.get('/', auth, async (req, res) => {
    const staffs = await Staff.find()    
    return res.json(staffs)
})

router.post('/', auth, async (req, res) => {
    try {
        const staff = new Staff(req.body)
        await staff.save()
        return res.json(staff)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = router
