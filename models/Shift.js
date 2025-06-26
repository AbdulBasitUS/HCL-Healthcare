const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  date: Date,
  type: { type: String, enum: ['Morning', 'Afternoon', 'Night'], default: 'Morning' }, // Morning, Afternoon, Night
  capacity: Number,
  assignedStaff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }]
});

module.exports = mongoose.model('Shift', shiftSchema);
