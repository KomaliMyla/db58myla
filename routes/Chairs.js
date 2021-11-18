var express = require('express');
const Chairs_controllers = require("../controllers/Chairs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Chairs', { title: 'Search Results Chairs' });
});

/*GET chairs*/
router.get("/", Chairs_controllers.Chairs_view_all_Page);

/* GET detail Chairs page */
router.get('/detail', Chairs_controllers.Chairs_view_one_Page);

/* GET create chairs page */
router.get("/create", Chairs_controllers.Chairs_create_Page);

/* GET update Chairs page */
router.get("/update", Chairs_controllers.Chairs_update_Page);

/* GET delete flowers page */
//router.get("/delete", flowers_controlers.flowers_delete_Page);

module.exports = router;