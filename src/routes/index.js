const { Router } = require('express');
const router = Router();

const { getUsers, createUsers } = require('../controllers/index.controllers');

router.get('/users', getUsers);
router.post('/users', createUsers);

module.exports = router;