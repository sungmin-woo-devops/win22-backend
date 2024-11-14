const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const questionRouter = require("./routes/questions");
const anwserRouter = require('./routes/answers');

const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('API is running!');
});
app.use('/api/users', usersRouter);
app.use('/api/questions', questionRouter);
app.use('/api/answers', anwserRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});

module.exports = app;