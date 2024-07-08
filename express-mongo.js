const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')  //odm 
const empc =require('./model/mongo')
const URL ="mongodb://admin:admin123@ac-o6pld5r-shard-00-00.pdpbztf.mongodb.net:27017,ac-o6pld5r-shard-00-01.pdpbztf.mongodb.net:27017,ac-o6pld5r-shard-00-02.pdpbztf.mongodb.net:27017/gfgdb?ssl=true&replicaSet=atlas-12hn2n-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";


var app = express()
app.use(bp.json())

app.post('/addusers',(req,res) => {
    const user = new empc({...req.body})
    user.save().then(() => console.log('user added'))
    res.send('user added')
})

app.get('/loaddata',async(req,res) => {
    const user = await empc.find();
    res.send(users)
})

app.get('/loaddata/:id',async(req,res) => {
    const uid =parseInt(req.params.id)
    const user = await empc.findById(uid);
    res.send(users)
})


const startServer = async () => {
    await mongoose.connect(URL)
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
}
startServer()