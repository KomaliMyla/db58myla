var express = require('express');
const Chairs_controllers = require("../controllers/Chairs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Chairs', { title: 'Search Results Chairs' });
});

module.exports = router;

/*GET chairs*/
router.get("/", Chairs_controllers.Chairs_view_all_Page);

/* GET detail Chairs page */
router.get('/detail', Chairs_controllers.Chairs_view_one_Page);

/* GET create chairs page */
router.get("/create", Chairs_controllers.Chairs_create_Page);

/* GET update flowers page */
router.get("/update", flowers_controlers.flowers_update_Page);