var express = require('express');
var router = express.Router();
const db=require("../Database")
const moogoose = require("mongoose")
const DetailModel=moogoose.model("UserCredential")

router.get('/signin',(req,res)=>{
  res.render('signin')
})

router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.post('/signup',async(req,res)=>{
  var contact = req.body.contact
  var password = req.body.password
  var Detail = new DetailModel()
  Detail.contact=contact
  Detail.password=password
  Detail.save((err,docs)=>{
      if(!err){
          console.log("Data inserted successfully")
      }else{
          console.log("Error in inserting data ",err)
      }
  })
  res.render("signin")
})

router.post("/signin",async(req,res)=>{

  console.log(req.body.contact)
  console.log(req.body.password)

  let passErr="*Invalid password"
  let contactErr="Email or phone not registered"

  let user = await DetailModel.findOne({contact:req.body.contact})
  if(user){
      let Enteredpass = req.body.password
      if(Enteredpass==user.password){
          console.log("Login successful")
          res.render('homepage',{passErr})
      }else{
          console.log("Invalid passwoerd")
          res.render('signin',{passErr})
      }
  }else{
      console.log("No such phone number or email")
      res.render('signin',{contactErr})
  }

})




module.exports = router;
