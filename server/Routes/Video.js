const router = require("express").Router();
const getDetails = require("./Video/getDetails");

// endpoint: {base_url}/api/video/
router.get("/", getDetails);

module.exports = router;
