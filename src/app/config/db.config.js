const sql = require('mssql');

// MSSQL 연결 설정
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST, // SQL Server 주소
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // 암호화
        trustServerCertificate: true, // 개발 환경에서만 true
    },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });

module.exports = {
    sql,
    poolPromise,
};
