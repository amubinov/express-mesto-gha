const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');

const DB_URL = 'mongodb://127.0.0.1:27017/mestodb';
const router = require('./routes/routers');

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());
app.disable('x-powered-by');
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '646d1ebe969627b3d5363e47',
  };

  next();
});
app.use(router);

async function startApp() {
  try {
    mongoose.connect(DB_URL);
    // eslint-disable-next-line no-console
    console.log('Подключились к базе данных');
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Сервер работает на ${PORT} порту`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Ошибка сервера');
    process.exit(1);
  }
}

startApp();
