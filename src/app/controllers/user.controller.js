const { poolPromise } = require('../config/db.config');

// 사용자 목록 조회
exports.getUsers = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving users');
    }
};

// 사용자 생성
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .query('INSERT INTO Users (name, email) VALUES (@name, @email)');
        res.status(201).send('User created');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating user');
    }
};

// 사용자 삭제
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Users WHERE id = @id');
        res.send('User deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting user');
    }
};