require('../src/db/mongoose')
const Task = require('../src/models/task')

//promise chaining
// Task.findByIdAndRemove("5e02976768390e0620087111").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//async await
const deleteTaskAndCount = async (id) => {
    const remove = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("5e02976768390e0620087111").then((count) => {
    console.log(count)
}).catch(e => console.log(e))