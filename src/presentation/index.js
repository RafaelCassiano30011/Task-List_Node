import express from "express";
import UserService from "../services/user/index.js";
import userRouter from "./routes/user/index.js";

const configureApp = ({ models }) => {
  const app = express();

  app.use(express.json());

  app.use("/user", userRouter({ models }));

  app.get("/task", async (req, res) => {
    const taskList = await models.Task.find();
    res.send(taskList);
  });

  app.post("/create", async (req, res) => {
    const body = req.body;

    const newTask = await models.Task.create(body);

    res.send(newTask);
  });

  app.post("/user/login", async (req, res) => {});

  return app;
};

export default configureApp;
