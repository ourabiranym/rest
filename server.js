const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())
app.use(require("./routes/index"))

 mongoose
   .connect("mongodb://127.0.0.1:27017/User")
   .then(() => console.log("DB IS CONNECTED"))
   .catch((err) => console.log(err));

   

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running...");
});
