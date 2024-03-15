let users = [];
exports.createUser = async (req, res) => {
  try {
    console.log(req);
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const newUser = { username, password };
    users.push(newUser);
    console.log(users);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create user" });
  }
};

/* get users list*/
exports.listUser = async (req, res) => {
  try {
    if (users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: "no user" });
  }
};

/* update user by name */
exports.updateUserData = async (req, res) => {
  try {
    const username = req.query.username;
    console.log(username);
    const { password } = req.body;
    const userIndex = users.findIndex((u) => u.username === username);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    users[userIndex].password = password;
    res.json(users[userIndex]);
  } catch (error) {
    res.status(400).json({ error: "no user" });
  }
};
/* delete user */
exports.deleteUserData = async (req, res) => {
  try {
    const username = req.query.username;
    const userIndex = users.findIndex((u) => u.username === username);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    users.splice(userIndex, 1);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ error: "no user" });
  }
};
