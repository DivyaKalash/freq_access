const express = require('express');
const { registeredUsers, grantAccess, checkAccess } = require('../controller/accessusers');

const { requireSignin } = require('../middleware/requirelogin');
const router = express.Router();

router.get("/getRegisteredUsers",registeredUsers);
router.post("/grantaccess", grantAccess);
router.post("/checkaccess", checkAccess);

module.exports = router;