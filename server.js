const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Route imports
const staffRoutes = require('./routes/statff');
// const shiftRoutes = require('./routes/shift');
// const attendanceRoutes = require('./routes/attendance');

// App config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/staff', staffRoutes);
// app.use('/api/shift', shiftRoutes);
// app.use('/api/attendance', attendanceRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));