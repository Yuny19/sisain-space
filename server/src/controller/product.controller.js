const Product = require('../model/product.model');
const Category = require('../model/category.model');

class ProductController {
    static create(req, res) {
        Product.create(req.body)
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
        Product.find()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static readAdmin(req, res) {
        const { page, limit } = req.query;
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 10,
        };

        Product.paginate({}, options)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static findId(req, res) {
        Product
            .findById(req.params.id)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(404).json(err.message);
            })
    }

    static delete(req, res) {
        Product.findByIdAndRemove(req.params.id)
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
        Product.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static findByCategory(req, res) {
        Category.findOne({ name: req.params.category })
            .then((category) => {
                return Product.find({kategori:category._id})
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = ProductController;