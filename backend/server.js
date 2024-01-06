const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

const uri = process.env.DB_URI;

const dbName = "users";
const collectionName = "data";

const client = new MongoClient(uri, { useUnifiedTopology: true });

// Middleware to parse JSON in the request body
app.use(express.json());

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // ... (your existing code)
  } catch (error) {
    console.error(error);
  }
}

connect();

// Define the /api/post-stat endpoint
app.post("/api/post-stat", async (req, res) => {
  try {
    const { value } = req.body;

    // Perform any validation or additional processing here

    // Insert the received data into the MongoDB collection
    const result = await collection.insertOne({ value });

    res
      .status(200)
      .json({ success: true, insertedCount: result.insertedCount });
  } catch (error) {
    console.error("Error handling /api/post-stat:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define other endpoints as needed

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
