const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

const uri = process.env.DB_URI;

const dbName = "users";
const collectionName = "data";

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const testEntry = {
      name: "Titti Tatti",
      age: 2,
      email: "tittitattitestaaja@testi.com",
    };

    // Insert the test entry into the collection
    const result = await collection.insertOne(testEntry);

    console.log(
      `Inserted ${result.insertedCount} document into the collection`
    );
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
