import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';

import userRouter from './User';

mongoose.Promise = global.Promise;

const app = express();

const {
  MONGODB_URI = 'mongodb://localhost',
  PORT = 8080,
} = process.env;

mongoose.connect(MONGODB_URI);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/users', userRouter);

app.use('/', (req, res) => {
  res.send('blueberry');
});

app.listen(PORT, () => console.log('app listening on PORT: ', PORT));