const moogoose = require("mongoose")
const uri="mongodb+srv://Jayaram123:121144169@cluster0.lhhlu.mongodb.net/Cluster0?retryWrites=true&w=majority"
moogoose.connect(uri)
console.log("Database connection succeed")


const Schema = moogoose.Schema({

    contact:{
        type:String,
        reqired:true
    },
    password:{
        type:String,
        reqired:true
    },

})


moogoose.model("UserCredential",Schema)
