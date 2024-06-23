const mongoose = require("mongoose");

// Replace 'mongodb://localhost:27017/mydatabase' with your actual MongoDB URI
const mongoURI = "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
