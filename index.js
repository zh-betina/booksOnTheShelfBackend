require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const decodeIDToken = require('./authenticateToken');

const app = express();
app.use(cors());
app.use(decodeIDToken);


mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}@sandbox.1tfwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log('Connected to database');
     })
     .catch((err) => {
       console.log('Error connecting to DB', err.message);
     });

const bkcasesRouter = require('./controllers/bookcases');

app.use('/api', bkcasesRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
