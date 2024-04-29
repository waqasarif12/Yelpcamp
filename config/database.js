/**
* this configuration for connect our application with mongodb
*/
const mongoose = require('mongoose')
let db = mongoose.connect("mongodb+srv://waqasarif:dravid@cluster0.hn1lhp7.mongodb.net/proj?retryWrites=true&w=majority",{ useNewUrlParser: true } , (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log('connected...')
    }
})
