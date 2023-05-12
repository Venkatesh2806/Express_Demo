const express= require('express');
const app = express();
const connect =require('./Data/connection');
const routes =require('./Data/route');
const cors=require('cors');
const { json } = require('body-parser');


connect();
app.use(express.json());
app.use('/api',routes);
app.use(cors());
app.get('/',(req,res)=>{
	res.send("Hello");
})

app.listen(8081,() => {
	console.log("Server has started!")})
