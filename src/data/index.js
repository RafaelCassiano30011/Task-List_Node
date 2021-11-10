import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const configureDataBase = async ({ ENV }) => {
  ;
  await mongoose.connect(ENV.DATA_URL);

  const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    done: { type: Boolean, default: false },
  });
  const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  });

  UserSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
  });

  const Task = mongoose.model("Task", TaskSchema);

  const User = mongoose.model("User", UserSchema);

  return { Task, User };
};

export default configureDataBase;
