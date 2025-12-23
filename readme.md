# 📇 Contact Manager Application (MERN Stack)

A full-stack **Contact Manager** web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
This application allows users to securely manage their contacts with authentication and complete CRUD functionality.

---

## 🚀 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS / CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

---

## ✨ Features

- 🔐 User Authentication (Register & Login)
- 🧾 JWT based protected routes
- ➕ Add new contacts
- ✏️ Edit existing contacts
- 🗑️ Delete contacts
- 📄 View all saved contacts
- 🔒 Secure REST APIs
- 📦 Clean MERN project structure

---

## 📂 Project Structure


contact-manager/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│ └── package.json
│
├── .gitignore
└── README.md


⚙️ Environment Variables

Create a `.env` file inside the **backend** folder and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🛠️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/bhupendrajs98/contact-manager.git
cd contact-manager

2️⃣ Backend Setup

cd backend
npm install
npm run dev

Backend server will run on:

http://localhost:8173

3️⃣ Frontend Setup

cd frontend
npm install
npm start

Frontend application will run on:

http://localhost:5173

🔗 API Endpoints

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | /api/users/register | Register user    |
| POST   | /api/users/login    | Login user       |
| GET    | /api/contacts       | Get all contacts |
| POST   | /api/contacts       | Create a contact |
| PUT    | /api/contacts/:id   | Update contact   |
| DELETE | /api/contacts/:id   | Delete contact   |

🧠 Learning Outcomes

Built a complete MERN stack application

Implemented JWT authentication & authorization

Designed RESTful APIs

Connected frontend with backend securely

Learned proper folder structure & GitHub workflow

Improved full-stack development skills

🌟 Future Improvements

Search & filter contacts

Profile image upload

Pagination

Role-based access

Deployment (Render / Vercel)

Better UI/UX enhancements

