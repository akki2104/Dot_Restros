const router = require("express").Router();
const { getUserProfile } = require('../controllers/user-controllers')


router.get("/profile", getUserProfile);



module.exports = router;
