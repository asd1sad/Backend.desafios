const express = require('express');
const { engine } = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create(
      {
        mongoUrl: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}?retryWrites=true&w=majority`,
      },
      mongoConfig
    ),
  })
);

app.use(cookieParser(process.env.COOKIE_SECRET || 'secret'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/', productRouter);
app.use('/login', authRouter);
app.use('/logout', authRouter);

module.exports = app;
