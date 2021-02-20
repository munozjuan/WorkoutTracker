//dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
//setting express app
const app = express(); 
const PORT = process.env.PORT || 8080;


app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //parse every json
app.use(express.static("public"));

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//routes

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});