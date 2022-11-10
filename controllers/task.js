const Task = require('../models/Task.js');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks});

    } catch (error) {
        console.log(error);
    }
};
const createTasks = async (req, res) => {
  try {
    const user = req.body;
    const task = await Task.create(user);
    res.status(201).json({ _id: task.id, task });
  } catch (error) {
    res.status(500).json(error)
  }
};
const getTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findOne({_id:id})
        if(!task) return res.status(404).send(`no task with id:${id} found`)
        res.status(200).json(task);
    } catch (error) {
        res.send(error)
    }
};
const deleteTasks = async (req, res) => {
    const id = req.params.id
    const task = await Task.findOneAndDelete({ _id: id })
    if(!task) return res.status(404).send(`no task with id:${id} found`)
    res.status(201).json(`task with id :${id} is deleted`);
};
const updateTasks = async (req, res) => {
    try {
        const id = req.params.id

        const task = await Task.findOneAndUpdate({_id:id}, req.body,{
            new:true,runValidators:true
        })
        if(!task) return res.status(404).send(`no task with id:${id} found`)
        res.json({task});
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks
};
