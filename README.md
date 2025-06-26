# 🏥 Healthcare Staff Shift Scheduler & Attendance Tracker - Backend

This is the backend API for a full-stack healthcare application that allows hospitals or clinics to manage staff shifts and track attendance. Built with **Node.js**, **Express**, and **MongoDB**, the API features secure authentication, shift scheduling, staff management, and attendance tracking.

---

## 🚀 Features

- 🔐 **JWT Authentication** for Admin
- 👩‍⚕️ **Staff Management** – Add/view staff with roles and shift preferences
- 📅 **Shift Scheduler** – Create and assign staff to shifts
- ✅ **Attendance Tracker** – Mark Present/Absent with remarks
- ⚠️ **Conflict Detection** – Prevent double-booking staff for shifts

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **bcrypt** for password hashing
- **JWT** for secure authentication

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/healthcare-backend.git
cd healthcare-backend
```
2. Install Dependencies
```bash   
npm install
```
4. Configure Environment Variables
Create a .env file in the project root:

.env
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
4. Start the Server
```npm start```
🧪 API Endpoints
Method	Route	Description

- `POST` `/api/login`	Admin login
- `POST` `/api/staff`	Add a new staff member
- `GET` 	`/api/staff`	Get list of all staff
- `POST`	`/api/shifts`	Create a new shift
- `GET`	 `/api/shifts`	View all created shifts
- `PATCH`	 `/api/shifts/:id/assign`	Assign staff to a shift
- `PATCH`	 `/api/shifts/:id/unassign`	Unassign staff from a shift
- `POST`	 `/api/attendance/:shiftId`	Mark attendance for a shift

🛡️ Protected routes require Authorization: Bearer <token> in headers.

👤 Authentication Flow
Use /api/login with admin credentials to get a JWT token.

Send the token in headers for protected endpoints:

http
Authorization: Bearer your_token_here
🧑‍💻 Admin Setup
To create an initial admin user manually, run a script like:

js
```
const User = require('./models/User');
const admin = new User({ username: 'admin', password: 'admin123' });
await admin.save();
```

