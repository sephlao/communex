const users = [];

const addUser = ({ id, name, channel }) => {
  const chnl = channel.trim().toLowerCase();
  const checkExisting = users.find(u => u.channel === chnl && u.name === name);

  if (checkExisting) return { error: `${name} already exist in ${channel}` };

  const user = { id, name, channel: chnl };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(u => u.id === id);

  if (index >= 0) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(u => u.id === id);

const getUsersInRoom = channel => users.filter(u => u.channel === channel);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
