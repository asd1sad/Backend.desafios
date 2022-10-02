const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const normalizr = require('normalizr');
const { normalize, schema, denormalize } = normalizr;

const Container = require('./Container');
const Messages = require('./Messages');

io.on('connection', async (socket) => {
  console.log('a user connected');

  socket.emit('products', await Container.getFakeProducts());
  socket.emit('products-test', await Container.getFakeProducts());

  // socket.on('new-product', async (product) => {
  //   await Container.addProduct(product);
  //   io.sockets.emit('products', await Container.getFakeProducts());
  // });

  socket.on('new-message', async (message) => {
    await Messages.addMessage(message);
    io.sockets.emit('messages', await Messages.getMessages());
  });

  socket.on('new-message', async (message) => {
    const authorSchema = new schema.Entity(
      'author',
      {},
      { idAttribute: 'email' }
    );
    const messageSchema = new schema.Entity(
      'message',
      { author: authorSchema },
      { idAttribute: 'timestamp' }
    );
    const messagesSchema = new schema.Entity(
      'messages',
      { messages: [messageSchema] },
      { idAttribute: 'messages' }
    );

    const normalizedData = normalize(message, messageSchema);
    console.log(normalizedData);

    const denormalizedData = denormalize(
      normalizedData.result,
      messageSchema,
      normalizedData.entities
    );

    await Messages.addMessage(message);
    io.sockets.emit('messages', await Messages.getMessages());
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
