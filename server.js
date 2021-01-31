const jsonServer = require('start');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3000;

server.use(middlewares);

server.listen(PORT, () => {
  console.log('Server is running');
});
      