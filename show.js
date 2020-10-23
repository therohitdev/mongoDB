const mongodb = require('mongodb')
const url = "mongodb://localhost:27017"

mongodb.connect(url, { useUnifiedTopology : true} ,(err, db) => {
    if(err) throw err
    db.db("newDatabase").collection("new").find().toArray((err, data) => {
        console.log(data)
        db.close()
    });
})
