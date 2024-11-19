const auth = require("../controllers/authController");
const router = require("express").Router();

router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;
