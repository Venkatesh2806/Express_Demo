require ('dotenv').config();
const mongoose =require('mongoose');
const express =require('express');
const db_url = process.env.DB_URL;

const connect =async function()
{
    mongoose.connect(db_url).then((val)=>{
        console.log("DataBase has connected");
    }).catch((err)=>{
        console.log("Error on connecting database")
    })
}

module.exports=connect;