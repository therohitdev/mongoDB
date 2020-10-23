const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017"
const myData = [
    {
        _id : 1,
        name : "Rohit",
        age : 21,
        enroll : "0208CS171092",
        college : "ggct"
    }
    ,{
        _id : 2,
        name : "Rahul",
        age : 21,
        enroll : "0208CS171093",
        college : "ggct"
    },
    {
       _id : 3,
        name : "Rohan",
        age : 23,
        enroll : "0208CS171094",
        college : "ggct"        
    }
]

mongodb.connect(url,{ useUnifiedTopology : true } , (err, db) => {
    if(err) throw err
    db.db('newDatabase').collection('new').insertMany(myData, (err, res) => {
        if(err) throw err
        console.log("Data inserted")
        db.close()
    })
})
