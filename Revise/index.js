require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const mainRouter = require('./Routes/index.js');
const { dbController } = require('./dbController.js');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use('/api', mainRouter);

console.log('runniing');
dbController();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


