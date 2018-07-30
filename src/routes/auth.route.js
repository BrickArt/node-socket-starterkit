const authController = require("../controllers/auth.controller");

module.exports = {
    authorithation
};

function authorithation(req, res, next) {
    console.log("authRoute");
    res.status(200).json({
        hello: "world"
    });
    console.log(authController.authorization() ? "auth is completed" : "authError");
}
