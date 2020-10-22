# mongoDB
## Some Important Commands

#### show dbs
    Show all databases

#### db
    To display the database you are using

#### use <db_name>
    To create and use database

#### db.dropDatabase()
    First you go to your delete database and then use this command

#### db.createCollection(‘collection_name’)
    For creating collection

#### Show collections
    For show all collections

#### db.collection_name.drop()
    For delete collection
    
#### db.collection_name.insertOne({
  _id : 1,
  ...
})
    For inserting data in collection

#### db.collection_name.insertMany(
{
  _id : 3,
  name : "Rohit",
  age : 21,
  ....
},
{
  _id : 4,
  name : "Rahul",
  age : 27,
  ....
}
)
