const mongoose = require("mongoose")

const toDoSchema = new mongoose.Schema(
  {
    toDoName: {
      type: String,
      required: true,
      trim: true,
    },
    toDoDescription: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  // Adding timestamps for when the document is created and last modified
  { timestamps: true }
)

module.exports = mongoose.model("toDo", toDoSchema)