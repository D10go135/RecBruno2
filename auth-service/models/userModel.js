const users = [];

exports.findUser = (username) => users.find(u => u.username === username);
exports.createUser = (username, password) => {
  const user = { username, password };
  users.push(user);
  return user;
};
