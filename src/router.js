const router = require("express").Router();
const auth = require("./middleware/auth.middleware");

const authRoute = require("./routes/auth.route");

router.get("/authorithation", authRoute.authorithation);

module.exports = router;