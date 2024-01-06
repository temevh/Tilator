const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const cors = require("cors"); // Import the cors middleware
require("dotenv").config();

const app = express();
const PORT = 5000;

const uri = process.env.DB_URI;

const dbName = "users";
const collectionName = "data";

const client = new MongoClient(uri, { useUnifiedTopology: true });

// Declare the collection variable at a higher scope
let collection;

// Middleware to parse JSON in the request body
app.use(express.json());

// Use the cors middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    collection = db.collection(collectionName);

    app.post("/api/data", (req, res) => {
      const data = req.body.value; // Extract the 'value' property from the request body

      // Insert the data into the collection
      collection.insertOne({ value: data }, (insertErr, result) => {
        if (insertErr) {
          console.error("Error inserting data into MongoDB:", insertErr);
          res.status(500).send("Internal Server Error");
          return;
        }

        console.log("Data inserted successfully:", result.ops[0]);
        res.status(200).send("Data inserted successfully");
      });
    });

    // Start the server after connecting to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

// Call the connect function to establish the MongoDB connection
connect();
