import UserService from "../../../services/user/index.js";

const listUserRoutes = (deps) => {
  return async (req, res) => {
    try {
      const userService = new UserService(deps);

      const listUser = await userService.list();

      return res.status(200).json(listUser);
    } catch (error) {
      return res.status(200).json({ error: error.message });
    }
  };
};

export default listUserRoutes;
