const sql = require('mssql');

const UserModel = {
    getAllUsers: async () => {
        const pool = await poolPromise;
        return pool.request().query('SELECT * FROM Users');
    },
    createUser: async (name, email) => {
        const pool = await poolPromise;
        return pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .query('INSERT INTO Users (name, email) VALUES (@name, @email)');
    },
    deleteUser: async (id) => {
        const pool = await poolPromise;
        return pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Users WHERE id = @id');
    }
};

module.exports = UserModel;