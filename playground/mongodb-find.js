const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59e3bf5c07cef023d0b411f4')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos.');
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos.');
    // });

    db.collection('Users').find({name: 'Emil'})
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 4));
        }, (err) => {
            console.log('Unable to fetch users.');
        });

    //db.close();
});
