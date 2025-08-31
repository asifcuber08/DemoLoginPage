# Login System (Next.js + Node.js + MySQL)

A simple **login/signup/dashboard system** using Next.js for frontend, Node.js/Express for backend, and MySQL for database.  
Users can register, login, access a protected dashboard, and logout.  

---

## **🚀Features**

- User signup with email and password
- User login with email and password
- Protected dashboard (only accessible when logged in)
- Logout functionality
- Passwords are securely hashed with bcrypt
- JWT-based authentication
- Responsive UI built with Tailwind CSS
- Frontend and backend fully separated

---

## **📁Folder Structure**

```
Login/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── node_modules/
├── frontend/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js          
│   │   ├── login/page.js
│   │   ├── signup/page.js
│   │   └── dashboard/page.js
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   └── api.js
│   ├── package.json
│   └── node_modules/
│   └── .env.local
└── README.md

```


---

## Requirements

- Node.js (v18+ recommended)
- MySQL server (or XAMPP/WAMP)
- npm or yarn

---

## ⚙️Setup Instructions

### 1️⃣ MySQL Database

1. Open **phpMyAdmin** or MySQL CLI.  
2. Create a database:

```sql
CREATE DATABASE login_system;
```
###
2. Create a users table:

USE login_system;

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
### 2️⃣ Backend Setup
1. Go to backend folder:
```
cd backend
```
2. Install dependencies:
```
npm install
```
3. Create a .env file in backend:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD= your_mysql_password //if you dont have leave it blank
DB_NAME=login_system
PORT=5000
JWT_SECRET=your_jwt_secret_here //you write any string here ex. supersecretkey
```
Replace your_mysql_password with your MySQL password.
JWT_SECRET can be any random string to sign JWT tokens.

4. Start backend server:
```bash
node server.js
```

### 3️⃣ Frontend Setup
without closing this terminal open different terminal and past this code

1. Go to frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create .env.local:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
4. Start frontend:
```bash
npm run dev
```
Frontend runs at http://localhost:3000

### 4️⃣ Using the Application

1. Open http://localhost:3000 in your browser.

2. Use Signup page to create an account.

3. Login with your credentials.

4. Access the Dashboard (protected route).

5. Use Logout button in navbar to return to homepage.

### 5️⃣ Notes

1. Backend must be running for frontend to work.

2. MySQL database must exist and .env credentials must match.

3. Passwords are stored hashed with bcrypt.

4. 4JWT token protects the dashboard route.

4. UI is responsive with Tailwind CSS.

### 7️⃣ Quick Start Summary
```bash
# Backend
cd backend
npm install
# create .env
node server.js

# Frontend
cd frontend
npm install
# create .env.local
npm run dev
```
Open browser: http://localhost:3000

---

## 📥 Contributing
Pull requests are welcome!
If you find a bug or want to add a feature, feel free to open an issue.

---

## 👤 Author
Made with ❤️ by [Asif Shamim](https://github.com/asifcuber08)