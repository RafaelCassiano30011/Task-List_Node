class UserService {
  constructor(deps) {
    this.model = deps.models.User;
  }

  create(body) {
    const newUser = this.model.create(body);

    return newUser;
  }

  list() {
    const listUser = this.model.find();

    return listUser;
  }
}
export default UserService;
