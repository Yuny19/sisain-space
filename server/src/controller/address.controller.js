const Address = require('../model/address.model');

class AddressController {
    static create(req, res) {
        Address.create(req.body)
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
        Address.find({ user: req.user.id })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static delete(req, res) {
        Address.findByIdAndRemove(req.params.id)
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

    static update(req, res) {
        Address.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static findId(req, res) {
        Address.findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = AddressController;