const r = require("rethinkdb");
const TABLE = "users";


module.exports = {
    getUserById$
};

async function getUserById$({ userId }) {
    return await r.table(TABLE).get(userId).run(r._connection)
};