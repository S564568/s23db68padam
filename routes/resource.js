var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var horse_controller = require('../controllers/horse');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// horse ROUTES ///
// POST request for creating a horse.
router.post('/horse', horse_controller.horse_create_post);
// DELETE request to delete horse.
router.delete('/horse/:id', horse_controller.horse_delete);
// PUT request to update horse.
router.put('/horse/:id', horse_controller.horse_update_put);
// GET request for one horse.
router.get('/horse/:id', horse_controller.horse_detail);
// GET request for list of all horse items.
router.get('/horse', horse_controller.horse_list);

module.exports = router;


