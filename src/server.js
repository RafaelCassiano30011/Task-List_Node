import express from "express";
import dotenv from "dotenv";
import configureDataBase from "./data/index.js";
import configureApp from "./presentation/index.js";

dotenv.config();

const PORT = process.env.PORT;

async function run() {
  const models = await configureDataBase();

  const app = configureApp({models});

  app.listen(PORT, () => {
    console.log("servido iniciado com sucesso");
  });
}
run();
