// src/services/userService.js

export const getUsers = () => {
  const stored = localStorage.getItem('users');
  return stored ? JSON.parse(stored) : [];
};

export const findUser = (username, password) => {
  const users = getUsers();
  return users.find(user => user.username === username && user.password === password);

};
