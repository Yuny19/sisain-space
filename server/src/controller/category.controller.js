const Category = require('../model/category.model');


class CategoryController {
    static create(req, res) {
        Category.create(req.body)
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
        Category.find()
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

        Category.paginate({}, options)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static delete(req, res) {
        Category.findByIdAndRemove(req.params.id)
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
    
    static findId(req, res){
        Category.findById(req.params.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json(err.message);
        })
    }

    static update(req, res) {
        Category.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = CategoryController;