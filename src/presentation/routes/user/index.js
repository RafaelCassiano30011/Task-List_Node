import { Router } from "express";
import createUserRouter from "./create.routes.js";
import listUserRoutes from "./list.routes.js";

const userRouter = (deps) => {
  const router = Router();

  router.post("/create", createUserRouter(deps));
  router.get("/list", listUserRoutes(deps));

  return router;
};

export default userRouter;
