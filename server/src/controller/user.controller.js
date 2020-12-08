const User = require('../model/user.model');
const jwt = require('../helper/jwt-sign.helper');
const decrypt = require('../helper/decrypt.helper');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
    static create(req, res) {
        let role = req.body.role;
        User.create({
            name: req.body.name,
            email: req.body.email.toLowerCase(),
            password: req.body.password,
            role: role
        })
            .then((user) => {
                let token = jwt(req.body.email.toLowerCase(), role, user._id);

                return User.findByIdAndUpdate(user._id, {
                    $set: {
                        token: token
                    }
                });
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

    static loginGoogle(req, res) {
        let logged = "";
        client.verifyIdToken({
            idToken: req.body.idToken,
            audience: process.env.CLIENT_ID
        })
            .then(response => {
                logged = response.payload;
                return User.findOne({ email: logged.email.toLowerCase() })
            })
            .then((user) => {
                if (user == null) {
                    return User.create({
                        name: logged.name,
                        email: logged.email.toLowerCase(),
                        process: 'google'
                    });
                } else if (user.process === 'google') {
                    res.status(200).json(user);
                }
            })
            .then((data) => {
                let token = jwt(logged.email.toLowerCase(), 'customer', data._id);

                User.findByIdAndUpdate(data._id, {
                    $set: {
                        token: token
                    }
                });

                res.status(200).json({
                    name: data.name,
                    token: token
                });
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                })
            })
    }

    static loginManual(req, res) {
        User.findOne({ email: req.body.email.toLowerCase() })
            .then((data) => {

                if (data.process === 'manual') {
                    const pass = decrypt(req.body.password, data.password);
                    if (pass) {
                        res.status(200).json({
                            name: data.name,
                            token: data.token
                        });
                    } else {
                        res.status(403).json({
                            message: 'not authorized'
                        })
                    }
                } else {
                    res.status(403).json({
                        message: "you can't login, try another way"

                    })
                }


            })
            .catch(err => {
                res.status(401).json({
                    message: 'please register'
                })
            })
    }

    static loginAdmin(req, res) {
        User.findOne({ email: req.body.email.toLowerCase() })
            .then((data) => {
                if (data.role === 'admin') {
                    const pass = decrypt(req.body.password, data.password);
                    if (pass) {
                        res.status(200).json({
                            name: data.name,
                            token: data.token
                        });
                    } else {
                        res.status(403).json({
                            message: 'not authorized'
                        });
                    }

                } else {
                    res.status(403).json({
                        message: "not authorized"
                    });
                }
            })
            .catch(err => {
                res.status(401).json({
                    message: 'please register'
                })
            })
    }

    static read(req, res) {
        const { page, limit } = req.query;
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 10,
        };
        User.paginate({}, options)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static readByUser(req, res){
        User.findById( req.user.id )
            .then((data) => {
                res.status(200).json({
                    name: data.name,
                    email: data.email
                });
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static findId(req, res) {
        User
            .findById(req.params.id)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(404).json(err.message);
            })
    }

    static delete(req, res) {
        User.findByIdAndRemove(req.params.id)
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
        User.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }
}

module.exports = UserController;