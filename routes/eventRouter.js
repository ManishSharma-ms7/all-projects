const event = require("../controllers/eventController");
const { userVerification } = require("./../middlewares/authMiddleware");
const router = require("express").Router();

router.get("/", userVerification, event.getEvents);
router.post("/", userVerification, event.saveEvents);
router.post("/:id/register", userVerification, event.register);
router.put("/:id", userVerification, event.updateEvents);
router.delete("/:id", userVerification, event.deleteEvents);

module.exports = router;
