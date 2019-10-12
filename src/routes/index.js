const { Router } = require('express');
const router = Router();

const { getUsers, getUser, createUsers, deleteUser, updateUser } = require('../controllers/index.controllers');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;