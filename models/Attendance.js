const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  shiftId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shift' },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  status: { type: String, enum: ['Present', 'Absent'], default: 'Absent' },
  remarks: String
});

module.exports = mongoose.model('Attendance', attendanceSchema);
