const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5aba862db1d0c60ec5fbd8b611';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((err) => console.log(err));

var id = '5aba5f1bbd3806f0acda4af1';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User:', user)
}).catch((err) => console.log(err));