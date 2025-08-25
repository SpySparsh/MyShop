# MyShop
# 🛒 MyShop – Full-Stack E-Commerce Website  

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)  
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)  
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)  
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)  
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=flat&logo=stripe&logoColor=white)  

**MyShop** is a modern full-stack e-commerce platform built with the MERN stack. It provides customers with a seamless shopping experience, secure authentication, order management, and integrated payments. An intuitive admin dashboard allows management of products, orders, and revenue analytics.  

---

## ✨ Features  

### 👤 User Features  
- 🔐 **Authentication & Authorization**: Register, login, JWT-based auth, auto logout on token expiry  
- 🛍️ **Product Catalog**: Browse products by categories, prices, and descriptions  
- 🔎 **Search & Filters**: Search bar with instant results  
- 📄 **Product Details**: Detailed product info with images, price, and reviews  
- 🛒 **Shopping Cart**: Add, update, and remove products  
- 💳 **Checkout & Payment**: Shipping info, payment via Stripe/UPI/Card, or Cash on Delivery  
- 📦 **Order Management**: Place orders, view history, track status  
- 📧 **Order Confirmation Emails**: Sent automatically after checkout  

### 🛠️ Admin Features  
- 📊 **Dashboard**: Overview of sales, orders, and top-performing products  
- ➕ **Product Management**: Add, edit, delete products  
- 📦 **Order Management**: View and update order statuses  
- 👥 **User Management** *(future scope)*  

---

## 🏗️ Architecture  

MyShop follows a **modular client-server architecture**:
1. Backend (Node.js + Express + MongoDB)
```
e-commerce/
│── server.js                # Entry point for backend (Express app)
│── config/
│   └── db.js                 # MongoDB connection logic
│
│── models/
│   └── user.model.js
│   └── product.model.js
│   └── order.model.js
│   └── cart.model.js         # optional, if cart is stored server-side
│
│── controllers/
│   └── auth.controller.js
│   └── product.controller.js
│   └── order.controller.js
│   └── user.controller.js
│
│── services/
│   └── product.service.js
│   └── order.service.js
│   └── user.service.js
│
│── routes/
│   └── product.routes.js
│   └── order.routes.js
│   └── user.routes.js
│   └── auth.routes.js
│
│── middleware/
│   └── authMiddleware.js     # Protect routes
│   └── errorMiddleware.js    # Centralized error handling
│
│── utils/
│   └── generateToken.js
│   └── emailService.js
│
│── uploads/                  # product images (if stored locally)
│
└── package.json
```

### Highlights

- controllers → only handle req / res.

- services → all business logic (DB queries, filtering, etc.).

- middleware → re-usable auth/error handling.

- models → MongoDB schemas.

- utils → helper functions (JWT, emails, file handling).

2. Frontend (React + Context API / Redux)
```
ecommerce-frontend/
│── src/
│   │── api/
│   │   └── axios.js           # axios instance with baseURL & interceptors
│   │
│   │── components/            # Reusable UI components
│   │   └── ProductCard.jsx
│   │   └── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   │── context/               # Global state (Cart, Auth, etc.)
│   │   └── CartContext.js
│   │   └── AuthContext.js
│   │
│   │── pages/                 # Main page components
│   │   └── Home.js
│   │   └── Products.js
│   │   └── ProductDetail.js
│   │   └── Cart.js
│   │   └── Checkout.js
│   │   └── Login.js
│   │   └── Register.js
│   │   └── AdminDashboard.js
│   │
│   │── hooks/                 # custom React hooks
│   │   └── useAuth.js
│   │   └── useCart.js
│   │
│   │── styles/                # Tailwind / custom CSS
│   │
│   │── App.js
│   │── main.js (or index.js)
│   │── routes.js              # All frontend routes
│
└── package.json
```
**Data Flow**  
1. React frontend interacts with Express backend via REST APIs  
2. Backend handles authentication, payments, orders, and product management  
3. MongoDB stores users, products, orders, and carts  
4. JWT tokens manage user sessions securely  
5. Admin dashboard consumes backend APIs with admin-level permissions  

---

## ⚙️ Tech Stack  

### Frontend  
- ⚛️ React (SPA)  
- 🎨 TailwindCSS + ShadCN (UI components)  
- ⚡ React Router for navigation  
- 🔑 Context API for auth & cart state  
- 📡 Axios for API requests  

### Backend  
- 🟢 Node.js + Express.js  
- 🗄️ MongoDB + Mongoose  
- 🔐 JWT Authentication + bcrypt for password hashing  
- 📤 Nodemailer for confirmation emails  
- 💳 Stripe / UPI / Card integration for payments  

### Deployment  
- 🌐 Vercel (Frontend)  
- 🚀 Render / Railway (Backend)  
- ☁️ MongoDB Atlas (Database)  

---

## 📸 Screenshots  

> Add your screenshots or demo GIFs here!  

- 🏠 Home Page  
- 📄 Product Details Page  
- 🛒 Shopping Cart  
- 💳 Checkout Flow  
- 📊 Admin Dashboard  

---

## 📦 Installation Guide  

### 🔧 Prerequisites  
- Node.js >= 16  
- MongoDB Atlas account  
- Stripe API keys (for payments)  

### 🔨 Setup Steps  

1. **Clone repo**  
   ```bash
   git clone https://github.com/your-username/myshop.git
   cd myshop
Install dependencies
```
cd backend && npm install
cd ../frontend && npm install
```
Environment variables
Create .env in backend/ with:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=JWT seceret
EMAIL_USER=email
EMAIL_PASS=email pass
JWT_ACCESS_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_secret_here
RAZORPAY_KEY_ID=razor pay id
RAZORPAY_KEY_SECRET=razor seceret
```
Run backend
```
cd backend
npm run dev
```
Run frontend
```
cd frontend
npm start
```
Visit

http://localhost:3000
🚀 Future Enhancements
📝 Product Reviews & Ratings

📦 Inventory / Stock Management

📊 Advanced Sales Analytics

🌍 Multi-language & Multi-currency support

🔔 Real-time order status notifications

📱 PWA (Progressive Web App) support

🤝 Contributing
Contributions are welcome! Feel free to fork this repo, submit issues, and open pull requests.

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Sparsh Sharma

📍 Ghaziabad, Uttar Pradesh

📧 sparshs730@gmail.com

🔗 LinkedIn | GitHub
