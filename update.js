const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017"

mongodb.connect(url, { useUnifiedTopology  : true }, (err, db) => {
    if(err) throw err
    db.db("newDatabase").collection("new").findOneAndUpdate({ _id : 1 }, { $set : { name : "Rohit Kumar" }}, (err, res)=>{
        if(err) throw err
        console.log("data update")
    })
})
