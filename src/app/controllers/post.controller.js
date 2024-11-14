const { poolPromise } = require('../config/db.config');

// 게시글 목록 조회
exports.getPosts = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Posts');
        res.json(result.recordset); // 게시글 목록 반환
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving posts');
    }
};

// 게시글 생성
exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('title', sql.NVarChar, title)
            .input('content', sql.NVarChar, content)
            .query('INSERT INTO Posts (title, content) VALUES (@title, @content)');
        res.status(201).send('Post created');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating post');
    }
};

// 게시글 삭제
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Posts WHERE id = @id');
        res.send('Post deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting post');
    }
};
