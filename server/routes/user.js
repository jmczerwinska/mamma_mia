const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
    getAllUsers,
    createUser,
    getUser,
    updateUser, 
    deleteUser 
} = require('../controllers/user');

const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;