const Order = require('../model/order.model');

class OrderController {
    static create(req, res) {
        Order.create(req.body)
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
}

module.exports = OrderController;