const express = require('express');
const Shift = require('../models/Shift');
const Staff = require('../models/Staff');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const shift = new Shift(req.body);
  await shift.save();
  res.json(shift);
});

router.get('/', auth, async (req, res) => {
  console.log("Shifts", await Shift.find());
  const shifts = await Shift.find().populate('assignedStaff');
  console.log("Shifts populated", shifts);
  res.json(shifts);
});

router.post('/:id/assign', auth, async (req, res) => {
  const { staffId } = req.body;
  const shift = await Shift.findById(req.params.id);

  const isAlreadyAssigned = shift.assignedStaff.includes(staffId);
  if (isAlreadyAssigned) {
    return res.status(400).json({ message: 'Staff already assigned to this shift' });
  }

  if (shift.assignedStaff.length >= shift.capacity) {
    return res.status(400).json({ message: 'Shift capacity reached' });
  }

  // Conflict check
  const sameDayShifts = await Shift.find({ date: shift.date, assignedStaff: staffId });
  if (sameDayShifts.length > 0) {
    return res.status(400).json({ message: 'Staff already assigned to a shift on this day' });
  }

  shift.assignedStaff.push(staffId);
  await shift.save();
  res.json(shift);
});

module.exports = router;
