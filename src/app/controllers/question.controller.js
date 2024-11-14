const { poolPromise } = require('../config/db.config');

// 게시글 목록 조회
exports.getQuestions = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Questions');
        res.json(result.recordset); // <- recordset 맞음?
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving questions');
    }
};

// 게시글 생성
exports.createQuestion = async (req, res) => {
    const { title, content } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('title', sql.NVarChar, title)
            .input('content', sql.NVarChar, content)
            .query('INSERT INTO Posts (title, content) VALUES (@title, @content)');
        res.status(201).send('Question created');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating question');
    }
};

// 게시글 삭제
exports.deleteQuestion = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Questions WHERE id = @id');
        res.send('Questions deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting question');
    }
};
