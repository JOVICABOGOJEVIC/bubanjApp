const express = require('express');
const router = express.Router();

router.get('/',require('../controllers/admin/adminController'));

router.post('/create/save',require('../controllers/admin/saveController'));

router.get('/view/edit',require('../controllers/admin/viewController'));
router.get('/delete/:id',require('../controllers/admin/deleteController'));
router.get('/edit/:id',require('../controllers/admin/editController'));

module.exports = router;
