const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');

// 게시글 목록 조회
router.get('/', questionController.getQuestions);

// 게시글 생성
router.post('/', questionController.createQuestions);

// 게시글 삭제
router.delete('/:id', questionController.deleteQuestions);

module.exports = router;
