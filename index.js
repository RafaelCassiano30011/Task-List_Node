import express from "express";
import dotenv from "dotenv";
import configureDataBase from "./src/data/index.js";

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

app.get("/task", async (req, res) => {
  const dataBase = await configureDataBase();

  const taskList = await dataBase.Task.find()


  res.send(taskList);
});



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("servido iniciado com sucesso");
});
