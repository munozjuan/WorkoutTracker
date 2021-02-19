const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express(); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //parse every json
app.use(express.static("public"));

mongoose.connect( "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//routes

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});