const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: String,
  description: String, 
},
{timestamps: true}
);

const todoModel = model ( "todos", todoSchema);

module.exports = todoModel;
