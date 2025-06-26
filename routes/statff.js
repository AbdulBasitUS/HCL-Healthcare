const express = require('express')
const Staff =  require('../models/Staff')
const User = require('../models/User')
const router = express.Router()

router.get('/', async (req, res) => {
    const staffs = await Staff.find()    
    return res.json(staffs)
})

router.post('/', async (req, res) => {
    try {
        const staff = new Staff(req.body)
        await staff.save()
        return res.json(staff)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/user', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = router
