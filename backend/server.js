const express = require("express");
const mongoose = require("mongoose");
const cors =require('cors')
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vishwajeetwalse9767:ki7zMdCSaytLd3SZ@cluster0.7hqn3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))


const myModal = mongoose.model(
  "MyModal",
  new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    teamName: [String],
    additionalInfo: String,
  })
);

app.post("/", async (req, res) => {
  const data = req.body;
  const newData = new myModal(data);

  try {
    const response = await newData.save(); 
    console.log(response);
    res.status(200).send(newData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
