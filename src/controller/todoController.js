// const { todoModel } = require("../models/todoModels");

// exports.getAllTodoTasks = (req, res) => {
//   return res.json(todoModel);
// };

const Todo = require("../model/Todo");


//Add a Todo task to a Todo collection
exports.createTodo = async (req, res) => {
  try {
    let todo = await req.body;
    let created = await Todo.create(todo);
    if (!created)
      return res.status(400).json({
        success: false,
        message: "Todo creation failed",
      });
    return res.status(201).json({
      success: true,
      message: "Todo Created Successfully",
      todo: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//Update a particular Todo task
  exports.updateTodo = async (req, res) => {
    try {
      let id = {_id: req.params.id};
      let user = await req.body;
      let update = await Todo.findOneAndpdate(id, user, { new: true });
    
      if (!update)
        return res.status(404).json({
          success: false,
          message: "Todo not updated",
          id: req.params.id,
        });
      
      return res.status(200).json({
        success: true,
        message: "Todo Updated Successfully",
        todo: update,
      });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  };
 
};

//Delete Todo task

exports.deleteTodo = async (req, res) => {
  try {
    let id = {_id: req.params.id};
    // let user = await req.body;
    let deleted = await Todo.findOneAndRemove(id);
    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "Todo not deleted",
      });
      
      return res.status(200).json({
        success: true, 
        message: "Todo deleted successfully"
      });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    }); 

  }
};

//Retrieve all Todo tasks
exports.getAllTodoTask = async (req, res) => {
  try {
    let todos = await Todo.find();
    if (todos.length === 0)
      return res.status(404).json({
        sccess: false,
        message: "Todo not found",
      });

    res.status(200).json({
      success: true,
      message: "Todo Task Found",
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

