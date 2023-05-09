const express= require('express');
const app = express();
app.listen(8080);

app.get('/',function(request,response)
{
    response.send("Data is successfully fetch");
})

app.get('/Agasti_infoTech',function(request,response)
{
    response.send("Welcome to Agasti_infoTech");
})