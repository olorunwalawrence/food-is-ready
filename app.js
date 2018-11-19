import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import route from './server/routes/index';

const app = express();

const port = parseInt(process.env.PORT, 10) || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.get('/', (req, res) => res.status(200).json({
  message: 'this is the application home page'
}));

app.use('/', route);
app.listen(port, (err) => {
  console.log('server is up and running');
});
