const Transaction = require('../model/transaction.model');

class TransactionController {
    static create(req, res) {
        req.body.user = req.user.id;
        Transaction.create(req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        Transaction.findByIdAndUpdate(req.params.id, {
            $set: {
                status: req.body.status,
                payment: req.body.payment
            }
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
        const { page, limit } = req.query;
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 10,
        };
        Transaction.paginate({}, options)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static readByUser(req, res) {
        Transaction.find({ user: req.user.id })
            .populate('address')
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
        Transaction.findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = TransactionController;