const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: String,
  staffId: { type: String, unique: true },
  role: { type: String, enum: ['Doctor', 'Nurse', 'Technician'], default: 'Doctor' }, // Doctor, Nurse, Technician
  shiftPreference: { type: String, enum: ['Morning', 'Afternoon', 'Night'], default: 'Morning' }, // Morning, Afternoon, Night
  contact: String
});

module.exports = mongoose.model('Staff', staffSchema);
