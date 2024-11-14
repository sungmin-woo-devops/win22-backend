const { poolPromise, sql } = require('../config/db.config');

const QuestionModel = {
    getAllQuestions: async () => {
        const pool = await poolPromise;
        return pool.request().query('SELECT * FROM Questions');
    },
    createQuestion: async (title, content) => {
        const pool = await poolPromise;
        return pool.request()
            .input('title', sql.NVarChar, title)
            .input('content', sql.NVarChar, content)
            .query('INSERT INTO Questions (title, content) VALUES (@title, @content)');
    },
    deleteQuestion: async (id) => {
        const pool = await poolPromise;
        return pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Questions WHERE id = @id');
    }
};

module.exports = QuestionModel;