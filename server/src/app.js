const express = require('express');
const ENV = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer();
var bodyParser = require('body-parser');

ENV.config();

const app = express();
const cors = require('cors');
const port = process.env.PORT;

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

const userRouter = require('./router/user.router');
const productRouter = require('./router/product.router');
const expeditionRouter = require('./router/expedition.router');
const orderRouter = require('./router/order.router');
const addressRouter = require('./router/address.router');
const transactionRouter = require('./router/transaction.router');
const categoryRouter = require('./router/category.router');


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.use(cors());

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/expedition', expeditionRouter);
app.use('/order', orderRouter);
app.use('/address', addressRouter);
app.use('/transaction', transactionRouter);
app.use('/category', categoryRouter);


app.get('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

app.listen(port, () => {
    console.log(`server run in here ${port}`)
})