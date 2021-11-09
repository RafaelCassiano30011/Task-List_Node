import mongoose from "mongoose";

const dataBaseAcess = "mongodb+srv://Rafael:Teib9cU01D3lpw8a@cluster0.k4auv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const configureDataBase = async () => {
  await mongoose.connect(dataBaseAcess);

  const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    done: { type: Boolean, default: false },
  });

  const Task = mongoose.model("Task", TaskSchema);

  return { Task };
};

export default configureDataBase;
