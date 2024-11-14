const express = require('express');
const router = express.Router();
const answerController = require('../controllers/answer.controller');

// 답변 목록 조회
router.get('/', answerController.getAnswers);

// 답변 생성
router.post('/', answerController.createAnswer);

// 답변 삭제
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;