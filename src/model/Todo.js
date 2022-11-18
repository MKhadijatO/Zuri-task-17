const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: "",
  description: "", 
},
{timestamp: true,}
);

const todoModel = model ( "todos", todoSchema);

module.exports = todoModel;
