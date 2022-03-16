const express = require("express");
const path = require("path");
//import {connect} from "./database.js";
const database = require("./database.js");


const PORT = process.env.PORT || 2500;

const app = express();
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/register", (req, res) => {
    console.log(req.body.user);
    var data = req.body.user;
    const usr = database.User.build({
      firstName: data.firstName,
      lastName: data.surname,
      email: data.email
    });
    usr.save();
    console.log("Added user "+ usr);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  database.connect();
  console.log(`Server listening on ${PORT}`);
});