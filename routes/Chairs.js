var express = require('express');
const Chairs_controllers = require("../controllers/Chairs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Chairs', { title: 'Search Results Chairs' });
});

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

/*GET chairs*/
router.get("/", Chairs_controllers.Chairs_view_all_Page);

/* GET detail Chairs page */
router.get('/detail', Chairs_controllers.Chairs_view_one_Page);

/* GET create chairs page */
router.get("/create", secured, Chairs_controllers.Chairs_create_Page);

/* GET update Chairs page */
router.get('/update', secured, Chairs_controllers.Chairs_update_Page);

/* GET delete Chairs page */
router.get("/delete", secured, Chairs_controllers.Chairs_delete_Page);

module.exports = router;

