const express = require("express");
const bodyParser = require("body-parser");
const route = require("../src/routes/route");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://bhawana1997:12axkvTVPnck3m46@cluster0.ac0by.mongodb.net/urlshortner?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);



app.listen(3000, function () {
  console.log("Express app running on port " +  3000);
});
