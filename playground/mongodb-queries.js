const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '69ee116cc0da0a10f435d136';
//
// if (!ObjectID.isValid(id)) {
//     console.log('id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) return console.log('id not found');
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('59ec7c23cce99c0cb812f11b').then((user) => {
    if (!user) return console.log('Unable to find user');
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
