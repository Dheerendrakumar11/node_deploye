const express = require("express");

const app = express();
const port = 8000;
app.use(express.json())

app.get('/api/get',(req,res)=>{
    res.send({message:"CI/CD intregation"})
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})