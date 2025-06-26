const express = require('express');
const Attendance = require('../models/Attendance');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { shiftId, staffId, status, remarks } = req.body;

  const existing = await Attendance.findOne({ shiftId, staffId });
  if (existing) {
    existing.status = status;
    existing.remarks = remarks;
    await existing.save();
    return res.json(existing);
  }

  const attendance = new Attendance({ shiftId, staffId, status, remarks });
  await attendance.save();
  res.json(attendance);
});

router.get('/:shiftId', auth, async (req, res) => {
  const attendance = await Attendance.find({ shiftId: req.params.shiftId }).populate('staffId');
  res.json(attendance);
});

module.exports = router;
