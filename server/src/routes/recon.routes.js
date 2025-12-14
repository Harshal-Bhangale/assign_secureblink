const express = require("express");
const router = express.Router();

const { enumerateDomain } = require("../controllers/recon.controller");
const validateDomain = require("../middlewares/validate.middleware");

/**
 * @route   POST /enumerate
 * @desc    Perform passive reconnaissance on a domain
 * @access  Public
 */
// router.post("/enumerate", enumerateDomain);
router.post("/enumerate", validateDomain, enumerateDomain);

module.exports = router;
