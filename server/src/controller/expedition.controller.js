const Expedition = require('../model/expedition.model');
const axios = require('axios');

const ExpeditionAPI = axios.create({
    baseURL: '	https://api.rajaongkir.com/starter/',
    headers: { 'key': `${process.env.EXPEDITION_KEY}` }
});


class ExpeditionController {
    static create(req, res) {
        Expedition.create(req.body)
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
        Expedition.find()
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

        Expedition.paginate({}, options)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static delete(req, res) {
        Expedition.findByIdAndRemove(req.params.id)
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

    static findId(req, res) {
        Expedition.findById(req.params.id)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(404).json(err.message);
            })
    }

    static update(req, res) {
        Expedition.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static getProvince(req, res) {
        ExpeditionAPI('province')
            .then(({ data }) => {
                res.status(200).json(data.rajaongkir.results)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static getProvinceById(req, res) {
        ExpeditionAPI('province', {
            params: {
                id: req.params.provinceId
            }
        })
            .then(({ data }) => {
                res.status(200).json(data.rajaongkir.results)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static getCity(req, res) {
        ExpeditionAPI(`city`, {
            params: {
                province: req.params.provinceid
            }
        })
            .then(({ data }) => {
                res.status(200).json(data.rajaongkir.results)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static getCost(req, res) {
        req.body.weight = 1000;

        ExpeditionAPI.post('cost', req.body)
            .then(({ data }) => {
                res.status(200).json(data.rajaongkir.results)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = ExpeditionController;