const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})




// const User = mongoose.model('User',{
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error);
// })

//Task, description : string and completed boolean
//learn how to mongoose, true/false

// task.save().then(()=> {
//     console.log(task);
// }).catch((error) => {
//     console.log(error)
// })
