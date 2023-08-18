const express = require('express')
const cors = require("cors");
const { default: mongoose } = require('mongoose');
const User = require('./models/User')
const app = express();

app.use(cors());
app.use(express.json())

 mongoose.connect("mongodb+srv://rajcodes733:Raji@olalekan1234@cluster0.chphjzz.mongodb.net/?retryWrites=true&w=majority")

app.post('/register', async (req, res)=>{
    const {username, password} = req.body;
     const userDoc = await User.create({username,password})
    res.json({userDoc})
});
app.listen("4000")

//