const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// 게시글 목록 조회
router.get('/', userController.getUsers);

// 게시글 생성
router.post('/', userController.createUser);

// 게시글 삭제
router.delete('/:id', userController.deleteUser);

module.exports = router;
