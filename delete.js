const mongodb = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"

mongodb.connect(url, { useUnifiedTopology : true }, (err, db) => {
    if(err) throw err
    db.db('newDatabase').collection("new").findOneAndDelete({ _id : 3}, (err, res) => {
        if(err) throw err
        console.log("data is deleted")
    })
})
