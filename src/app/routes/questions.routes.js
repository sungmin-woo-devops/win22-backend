const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');

// 게시글 목록 조회
router.get('/', questionController.getPosts);

// 게시글 생성
router.post('/', questionController.createPost);

// 게시글 삭제
router.delete('/:id', questionController.deletePost);

module.exports = router;
