const Order = require('../model/order.model');
const Product = require('../model/product.model');

class OrderController {
    static create(req, res) {
      
        req.body.user = req.user.id;
        if (req.body.total == null) {
            req.body.total = 1;
        }


        Product.findById(req.body.product)
            .then((data) => {
                console.log(data)
                req.body.totalPay = req.body.total * data.price;
                return Order.create(req.body);
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    }

    static read(req, res) {
        Order.find()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static findId(req, res) {
        Order
            .findById(req.params.id)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(404).json(err.message);
            })
    }

    static update(req, res) {
        Order.findByIdAndUpdate(req.params.id,{

            $set:{
                statusOrder : req.body.statusOrder,
                total: req.body.total,
                totalPay: req.body.totalPay
            }
        })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static delete(req, res) {
        Order.findByIdAndRemove(req.params.id)
            .then(() => {
                res.status(200).json({
                    message: 'delete successfully'
                })
                    .catch(err => {
                        res.status(404).json({
                            message: err.message
                        })
                    })
            })
    }

    static readByUser(req, res) {
        Order.find().and([{ user: req.user.id }, { statusOrder: 'cart' }])
        .populate('product')
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = OrderController;