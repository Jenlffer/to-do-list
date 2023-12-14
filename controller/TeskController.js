const Task = require('../models/Tesk')

//fazendo uma rota
const getAllTasks = async (req, res) => {
    try{
        const tasksList = await Task.find();//pega listas do banco de dados
        return res.render("index", {tasksList});
    }catch (err) {
        res.status(500).send({error : err.message});
    }
}; //criando variavel que recebe uma arrowfuction (função)



const createTask = async (req,res) => {
    const task = req.body;

    if(!task){
        return res.redirect("/")
    }

    try{
        await Task.create(task)
        return res.redirect("/")
    }catch (err) {
        res.status(500).send({error : err.message})
    }
}
module.exports = {
    getAllTasks,
    createTask,
};//controller metodo da rota