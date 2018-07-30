const log = require("../utils/logger");
const asyncWrap = require("../utils/async");
const dbService = require("../services/db.service");


const createConnection = asyncWrap(async (req, res, next) => {
    const db = await dbService.initConnection();
    
    if (db) {
        log.info("DataBase connection is success!")
        req._rdb = db;
        return next();
    }
    log.error("Have problems with connection to db...")
    next(0)
});

module.exports = {
    createConnection
};