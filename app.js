import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();

const port = parseInt(process.env.PORT,10 )|| 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(logger('dev'));

app.get('/',(req,res) => res.status().json({
    message:'this is the application home page'
}));

app.listen(port, (err) =>{
    console.log('server is up and running');
});