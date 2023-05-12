const mongoose= require('mongoose');
const schema =new mongoose.Schema({
   
    Name : {required:true,type:String},
    Email: {required:true,type:String},
    Designation: {required:true,type:String}
})

module.exports=mongoose.model('Contacts',schema);