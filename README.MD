# 💰 Finance Tracker

Finance Tracker is a full-stack web application designed to help users manage their personal income and expenses efficiently. With real-time data visualization, transaction history, and smart summaries, users can make informed financial decisions with ease.

---

## 🧠 Features

- 📈 **Live Dashboard** with summary of income, expenses, and current balance
- 💸 **Add, Delete Transactions** easily
- 📊 **Pie, Line & Bar Charts** for visualizing income vs. expense
- 🔍 **Search by Name (Income/Expense)**
- 🔐 **Authentication** for secure access
- 💾 **Data stored with MongoDB**, displayed via React interface
- ✅ Responsive, mobile-friendly UI

---

## 🚀 Tech Stack

### Frontend (Client)

- **React** + **Vite** for blazing-fast interface
- **React Bootstrap** / Bootstrap for design
- **@nivo/(bar,line,pie)** for graphs
- **React-Router-Dom** for navigation
- **Axios** for API calls
- **React Toastify** for notifications

### Backend (Server)

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **CORS** for cross-origin API handling
- **Bcrypt.js** for password hashing

---

## 📁 Folder Structure

```
finance-tracker/
│
├── ft_client/            # Frontend app (React)
│   ├── src/
│   │   ├── assets/
        ├── auth/
        ├── components/
        ├── context/
        ├── hooks/
│   │   ├── pages/
│   │       ├── chart/
            ├── layout/
        ├── utils/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── ft_api/            # Backend app (Node/Express)
    ├── config/
    ├── middlewares/
│   ├── models/
│   ├── routers/
│   ├── utils/
│   └── package.json
│
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Front-end repository:

```bash
git clone https://github.com/sushil-40/FinanceTracker_Client
cd FinanceTracker_Client
```

### 2. Setup Frontend

```bash
cd ../ft_client
npm install
npm run dev
```

### 2. Setup Backend

### 3. Clone the Back-end repository:

```bash
git clone https://github.com/sushil-40/FinanceTracker_API
cd FinanceTracker_API
```

### 2. Setup Backend

```bash
cd ../ft_api
npm install
npm run dev
```

---

## 🌐 Environment Variables

In the backend `.env` file, add:

```env
MONGO_URL=your_mongo_connection_string
JWT_SECRET = Your_Secret_Key
```

In the frontend `.env` file, add:

```env
VITE_ROOT_API=your_connection_string
```

---

## 📦 Build for Production

### Frontend:

```bash
npm run build
```

### Backend:

Use a tool like `pm2` or host on Vercel/Render/Heroku

---

## 📌 Future Improvements

- Export to CSV/PDF
- Budget planning module
- Dark mode toggle
- Multi-language support
- Improvement in [data visualization] Graph
- Implement sorting and editing or transactions

---

## 🧑‍💻 Author

**Sushil Dangoriya**  
IT Graduate & Full Stack Developer  
📍 Brisbane, Australia  
🔗 [LinkedIn](https://www.linkedin.com/in/sushil-40)

---

## 📄 License

This project is for **educational purposes only** and is not intended for commercial use.

---
