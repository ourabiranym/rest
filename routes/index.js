
const User = require("../models/Users")
const router = require("express").Router()
router.post("/createUsers", async (req, res) => {
 
 try { 
   const{userName, email, phone}= req.body
  const user = await User.create(
    {
      userName: "rakia",
      email: "rakiagomycode@gmail.com",
      phone: "32514231",
    },
    {
      userName: "lara",
      email: "laragomycode@gmail.com",
      phone: "5295172",
    },
    {
      userName: "carla",
      email: "carlagomycode@gmail.com",
      phone: "20514878",
    }
  );
   res.status(201).json({status: true, msg: "user created", data: user}); 
 } 
 


  catch (err) {
    console.log(err)
  res.status(500).json({status: false, msg: err})
   
    }
  });


router.get("users", async (req, res) => {
  try {
    const user = await User.find({}); // Retrieve all user objects from database
    res.status(200).json({status: true, msg:"contacts are ready", data:"user"}); // Return array of user objects as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({status: false, msg: err}); // Handle errors
  }
});


const user = new User({
     userName: "lea",
      email: "alea@gmail.com",
     phone: 55253197,
 
 });
 user.save((err, data) => {
    if (err) throw err;
   console.log(data);
 });
 router.post("/add-user", (req, res) => {
   let newUser = req.body;
   User.create([newUser])
     .then((result) => res.send(result))
     .catch((err) => console.log("err", err));
 });
router.put("/edit-user/:id", (req, res) => {
  let userID = req.params.id;
  let body = req.body;
  User.updateOne({ _id: userID }, { $set: body }, { strict: true }, (err) => {
    if (err) throw err;
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});


router.delete("/delete-user/:id", (req, res) => {
  let userID = req.params.id;
  console.log(typeof userID);
  User.remove({ _id: userID }, (err) => {
    if (err) throw err;
  })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

module.exports = router