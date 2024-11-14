const { poolPromise, sql } = require('../config/db.config');

const PostModel = {
    getAllPosts: async () => {
        const pool = await poolPromise;
        return pool.request().query('SELECT * FROM Posts');
    },
    createPost: async (title, content) => {
        const pool = await poolPromise;
        return pool.request()
            .input('title', sql.NVarChar, title)
            .input('content', sql.NVarChar, content)
            .query('INSERT INTO Posts (title, content) VALUES (@title, @content)');
    },
    deletePost: async (id) => {
        const pool = await poolPromise;
        return pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Posts WHERE id = @id');
    }
};

module.exports = PostModel;