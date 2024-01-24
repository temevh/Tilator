const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

const uri = process.env.DB_URI;

const dbName = "users";
const collectionName = "data";

const client = new MongoClient(uri, { useUnifiedTopology: true });

let collection;

// Middleware to parse JSON in the request body
app.use(express.json());

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
      const data = req.body.value;

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

    app.post("/api/users", (req, res) => {
      const data = req.body.value;

      const peopleCollection = db.collection("people");

      peopleCollection.insertOne({ value: data }, (insertErr, result) => {
        if (insertErr) {
          console.error("Error inserting data into MongoDB:", insertErr);
          res.status(500).send("Internal Server Error");
          return;
        }
        console.log("Data inserted successfully:", result.ops[0]);
        res.status(200).send("Data inserted successfully");
      });
    });

    app.get("/api/users/data", async (req, res) => {
      try {
        const allData = await collection.find({}).toArray();
        res.status(200).json(allData);
      } catch (error) {
        console.error("Error retrieving data");
        res.status(500).send("Internal server error");
      }
    });

    app.get("/api/users/getPeople", async (req, res) => {
      try {
        const peopleCollection = db.collection("people");
        const people = await peopleCollection.find({}).toArray();
        res.status(200).json(people);
      } catch (error) {
        console.error("Error retrieving people");
        res.status(500).send("Internal server error");
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

connect();
