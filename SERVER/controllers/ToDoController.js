const toDoModel = require("../models/ToDoModel")

module.exports.getToDo = async (req, res) =>{
    try {
        const toDo = await toDoModel.find();
        
        res.status(200).json({
            success: true,
            message: `Todo List retrived successfully`,
            data: toDo,
          })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error in fetching Todo List`,
            error: error
          })
    }
}

module.exports.addToDo = async (req, res) =>{
    try {
        const { toDoName, toDoDescription } = req.body;

        if(!toDoName || !toDoDescription)
        {
            return res.status(400).json({
                success: false,
                message: `Name and description for Todo is required`,
              })
        }

        const toDoItem = toDoModel.create({
            toDoName: toDoName,
            toDoDescription: toDoDescription,
            active: true,
        })

        res.status(200).json({
            success: true,
            message: `Todo List added successfully`,
          })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error while adding Todo List item`,
            error: error
          })
    }
}

module.exports.deleteToDo = async (req, res) =>{
    const { toDoId } = req.body;
    try {
        if(!toDoId)
        {
            return res.status(400).json({
                success: false,
                message: `todo item id is required`
              })
        }
        await toDoModel.findByIdAndDelete(toDoId)
        res.status(200).json({
            success: true,
            message: `Todo List item deleted successfully`,
          })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error while deleting Todo List item`,
            error: error
          })
    }
}

module.exports.activeToDo = async (req, res) =>{
    try {
        const { toDoId } = req.body;

        if(!toDoId)
        {
            return res.status(400).json({
                success: false,
                message: `todo item ID is required`
              })
        }

        await toDoModel.findByIdAndUpdate(
            toDoId, 
            {
                active: false
            }
        )
        res.status(200).json({
            success: true,
            message: `Todo List item inactivated successfully`,
          })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error while inactivating Todo List item`,
            error: error
          })
    }
}