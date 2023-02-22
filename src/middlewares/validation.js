const {userModel, updateUserModel, loginValidation, foodValidation, foodUpdateValidation} = require('../utilities/validatior')

module.exports = {
    userValidation: (req, res, next) => {
        const { error } = userModel.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    updateUserValidation: (req, res, next) => {
        const { error } = updateUserModel.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    loginValidation: (req, res, next) => {
        const { error } = loginValidation.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    foodValidation: (req, res, next) => {
        const { error } = foodValidation.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    foodUpdateValidation: (req, res, next) => {
        const { error } = foodUpdateValidation.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    }
}