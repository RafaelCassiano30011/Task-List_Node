import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const task = {
  id: 1,
  name: "Subir aplicacao no heroku",
  done: true,
};

const tasks = [task];

app.get("/cade", (req, res) => {
  res.send("O ALAN ?");
});

app.get("/task", (req, res) => {
  res.send(tasks);
});

app.post("/create", (req, res) => {
  const { ...newTask } = req.body;

  newTask.done === true ? true : (newTask.done = false);
  newTask.id = tasks.length + 1;

  tasks.push(newTask);

  res.send(tasks);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("servido iniciado com sucesso");
});
