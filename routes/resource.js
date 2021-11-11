var express = require("express");
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var Chairs_controller = require("../controllers/Chairs");

/// API ROUTE ///

// GET resources base.
router.get("/", api_controller.api);

/// Chairs ROUTES ///

// POST request for creating a Chairs.
router.post("/Chairs", Chairs_controller.Chairs_create_post);

// DELETE request to delete Chairs.
router.delete("/Chairs/:id",Chairs_controller.Chairs_delete);

// PUT request to update Chairs.
router.put("/Chairs/:id", Chairs_controller.Chairs_update_put);

// GET request for one Chairs.
router.get("/Chairs/:id", Chairs_controller.Chairs_detail);

// GET request for list of all Chairs items.
router.get("/Chairs", Chairs_controller.Chairs_view_all_Page);

module.exports = router;