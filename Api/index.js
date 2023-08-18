const express = require('express')
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json())

app.get('/register', (req, res)=>{
    const {username, password} = req.body
    res.json({requestData:{username, password}})
});
app.listen("4000")

//mongodb+srv://rajcodes733:<Raji@olalekan1234>@cluster0.chphjzz.mongodb.net/?retryWrites=true&w=majority