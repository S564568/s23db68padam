var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET costumes */
router.get('/', horse_controlers.horse_view_all_Page );
module.exports = router;
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 re

router.get('/detail',secured, horse_controlers.horse_view_one_Page);

router.get('/create',secured, horse_controlers.horse_create_Page);

router.get('/update',secured, horse_controlers.horse_update_Page);

router.get('/delete',secured, horse_controlers.horse_delete_Page);

