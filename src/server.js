import dotenv from "dotenv";
import configureDataBase from "./data/index.js";
import configureApp from "./presentation/index.js";

dotenv.config();

const PORT = process.env.PORT;

async function run() {
  const ENV = {
    DATA_URL: process.env.DATA_URL,
  };

 
  const models = await configureDataBase({ENV});

  const app = configureApp({ models });

  app.listen(PORT, () => {
    console.log("servido iniciado com sucesso");
  });
}
run();
