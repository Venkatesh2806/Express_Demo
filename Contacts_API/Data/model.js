const mongoose= require('mongoose');
const schema =new mongoose.Schema({
   
    Customer : {required:true,type:String},
    Company_Name: {required:true,type:String},
    Mobile: {required:true,type:String},
    Email: {required:true,type:String},
    Address: {required:true,type:String}
})

module.exports=mongoose.model('Contacts',schema);