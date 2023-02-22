const foodModel = require('../models/foodModel')

module.exports = {
    createFood : async (req, res) => {
        try {
            let data = req.body
            let saveData = await foodModel.create(data)
            return res.status(201).send({ status: true, msg: "Food created successfully", Food: saveData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    fetchFoodByfilter : async (req, res) => {
        try {
            let {page} = req.query
            if (!page) page = 1
            // let { productName, sizes, netWeight, price, ingredients, nutrition, description, images, isVegeterian } = req.query
            let findData = await foodModel.find({ $and: [req.query, { isDeleted: false }]}).skip(2*(page-1)).limit(2)
            return res.status(200).send({ status: true, Foods: findData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    updateFood : async (req, res) => {
        try {
            let {userId} = req.params
            req.body['updatedAt'] = new Date().toLocaleString()
            let updateData = await foodModel.findOneAndUpdate({ userId: userId , isDeleted: false}, req.body, {new: true})
            return res.status(200).send({ status: true, msg: "Food updated successfully", Foodata: updateData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    deleteFood : async (req, res) => {
        try {
            let {userId} = req.params
            let updateData = await foodModel.findOneAndUpdate({ userId: userId , isDeleted: false}, { isDeleted: true, deletedAt: new Date().toLocaleString()})
            return res.status(200).send({ status: true, msg: "Food deleted successfully" })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    }, 
}
