// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server');

    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5aba3bf497bb4a3f7d595230')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aba369c3297859c35bae63a')
    }, {
        $set: {
            name: 'Jorge'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

   // db.close();
});