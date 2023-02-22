const express = require("express")
const router = express.Router()

const {createUser, login, fetchUserById, updateUser, deleteUser} = require('../controllers/userController')
const {createFood, fetchFoodByfilter, updateFood, deleteFood} = require('../controllers/foodController')
const {authentication, authorization} = require('../middlewares/auth')
const {userValidation, loginValidation, updateUserValidation, foodValidation, foodUpdateValidation} = require('../middlewares/validation')

router.post('/createUser', userValidation, createUser)
router.post('/login', loginValidation, login)
router.get('/fetchUserById/:userId', authentication, fetchUserById)
router.put('/updateUser/:userId', updateUserValidation, authentication, authorization, updateUser)
router.delete('/deleteUser/:userId', authentication, authorization, deleteUser)

router.post('/createFood', authentication, foodValidation, createFood)
router.get('/fetchFood', authentication, fetchFoodByfilter)
router.put('/updateFood', authentication, authorization, foodUpdateValidation, updateFood)
router.delete('/deleteFood', authentication, authorization,deleteFood )

router.all("/*", function (req, res) { 
    return res.status(400).send({ status: false, message: "invalid http request" });
});

module.exports = router