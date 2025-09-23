// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// connect to db
connectDB(process.env.MONGO_URI);

// middlewares
app.use(cors()); // adjust origin in production
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// example protected route for home page data
const authMiddleware = require("./middleware/authMiddleware");
app.get("/api/home", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.name} to FoodieHub!` });
});

// health
app.get("/", (req, res) => res.send("Server is up"));

// start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
