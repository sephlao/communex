const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3001;
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

app.get("/", (req, res) => {
  res.send("Running...");
});

io.on("connection", socket => {
  socket.on("join", ({ name, channel }, callbackfn) => {
    console.log(`${name} just joined ${channel}`);
    const { user, error } = addUser({ id: socket.id, name, channel });

    if (error) return callbackfn(error);
    socket.emit("message", {
      user: "@bot",
      text: `Hi ${name}! Welcome to ${channel}`
    });
    socket.broadcast
      .to(user.channel)
      .emit("message", { user: "@bot", text: `${user.name} just joined!` });

    socket.join(user.channel);
    callbackfn();
  });

  socket.on("sendMessage", (message, callbackfn) => {
    const user = getUser(socket.id);
    console.log(user, user.channel);
    io.to(user.channel).emit("message", { user: user.name, text: message });
    callbackfn();
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("a user disconnected...");
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
