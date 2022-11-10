

const getAllTasks = (req,res) => {
    res.send("all tasks from folder")
}
const createTasks = (req,res) => {
    res.send("create task")
}
const getTask = (req,res) => {
    res.send("get single task")
}
const updateTasks = (req,res) => {
    res.send("update task")
}
const deleteTasks = (req,res) => {
    res.send("delete task")
}

module.exports = {
    getAllTasks, createTasks, getTask, updateTasks, deleteTasks
}