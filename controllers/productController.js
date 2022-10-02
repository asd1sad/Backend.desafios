const Container = require('../Container');
const Messages = require('../Messages');

exports.homePage = async (req, res) => {
  const products = await Container.getFakeProducts();
  const messages = await Messages.getMessages();
  const { username } = req.session;
  res.render('home', {
    products,
    messages,
    username,
  });
};

exports.productsPage = async (req, res) => {
  const products = await Container.getFakeProducts();
  const { username } = req.session;
  res.render('products', {
    products,
    username,
  });
};

exports.productsTestPage = async (req, res) => {
  const products = await Container.getFakeProducts();
  const { username } = req.session;
  res.render('products-test', {
    products,
    username,
  });
};
