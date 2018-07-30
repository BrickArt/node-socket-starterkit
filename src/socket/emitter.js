const { SYSTEM_DATA } = require("../data/emits");

module.exports = {
	system: {
    error: sendErrorToSocket
	}
};

function sendErrorToSocket(s, error) {
  log.error(`[ socket ]: ${error.message || error.errorMessage}`);
  log.debug(error)
  s.emit(SYSTEM_DATA.error, error)
}

