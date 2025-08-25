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

✅ Highlights

controllers → only handle req / res.

services → all business logic (DB queries, filtering, etc.).

middleware → re-usable auth/error handling.

models → MongoDB schemas.

utils → helper functions (JWT, emails, file handling).

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
