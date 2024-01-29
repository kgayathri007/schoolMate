const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const studRoutes = require('./routes/studRoutes');


const app=express();
const port=3000;

app.use(express.json());
app.use(bodyParser.json());
app.use("/api/Student",studRoutes);

connectDB();

app.get('/',(req,res)=>{
    res.send('welcome to schoolManagement API');
});

app.listen(port,()=>{
    console.log(`server running on http://locahost:${port}`);
});
    
    
    

