const express =require('express');
const router=express.Router();
const Contacts =require('./model');

router.get('/customer/contacts',async(req,res)=>
{
    //res.send('all records');
    try{
        const Data=await Contacts.find();
        res.status(200).json(Data);
      }
   catch(error)
   {
       console.log(error);
   }
})

router.get('/customer/contacts/get/:id',async (req,res)=>
{
    try{
        const id=req.params.id;
        const Data=await Contacts.findById(id);
        res.status(200).json(Data);
      }
   catch(error)
   {
       console.log(error);
   }
})

router.post('/customer/contacts/add',async(req,res)=>
{
   console.log(req.body)
    try{
        const contact= await new Contacts(
            {
                Customer:req.body.Customer,
                Company_Name:req.body.Company_Name,
                Mobile:req.body.Mobile,
                Email:req.body.Email,
                Address:req.body.Address
            }
        );
        contact.save();
        res.status(200).json("Entery has been added");
    }
    catch(error){
        res.status(500).json({error});
    }
})

router.put('/customer/contacts/update/:id',async(req,res)=>
{
    try{
        const id=req.params.id;
        const data=req.body;
        const options={new:true};
        const result=await Contacts.findByIdAndUpdate(id,data,options);
        res.status(200).json(result);
      }
      catch(error){
        res.status(500).json({error:error.message});

    }
})

router.delete('/customer/contacts/delete/:id',async(req,res)=>
{
   try{
    const id=req.params.id;
    const result=await Contacts.findByIdAndDelete(id);
    
    res.status(200).json({message:"Deleted Succesfully"});
   }
   catch(err)
   {
    console.log(err);
   }   
})

module.exports =router;