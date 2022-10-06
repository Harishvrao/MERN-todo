const { findById } = require('../Models/TodoModel')
const TodoModel = require('../Models/TodoModel')

// get requests
const getAlltodos = async (req, res) => {
    try {
        const allTodos = await TodoModel.find({}).sort({ "createdAt": -1 })
        return res.status(200).json(allTodos)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const toggleTodoDone = async (req, res) => {
    try {
        let todoref = await TodoModel.findById(req.params.id)
        console.log(todoref)
        const data = await TodoModel.findOneAndUpdate({ _id: req.params.id }, { done: !todoref.done })
        await data.save()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// post requests
const addTodo = async (req, res) => {
    try {
        // console.log(req.body.data)
        const newTodo = await TodoModel.create({
            data: req.body.data,
        })
        await newTodo.save()
        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// put requests
const updateTodo = async (req, res) => {
    try {
        console.log(req.body)
          await TodoModel.findOneAndUpdate({ _id: req.params.id }, { data: req.body.data })
        const todo = await TodoModel.findById(req.params.id)
        console.log(todo)
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// delete requests
const deleteTodo = async (req, res) => {
    try {
         await TodoModel.findByIdAndDelete(req.params.id)
         const data = await TodoModel.find({}).sort({createdAt:-1})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = { getAlltodos, toggleTodoDone, addTodo, updateTodo, deleteTodo }