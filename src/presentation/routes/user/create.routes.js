import UserService from "../../../services/user/index.js";

const createUserRouter = (deps) => {
  return async (req, res) => {
    try {
      const userService = new UserService(deps);

      const body = req.body;

      const newUser = await userService.create(body);

      console.log(newUser);

      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
};

export default createUserRouter;
