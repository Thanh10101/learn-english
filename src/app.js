const express = require('express');
const app = express();
const port = 3000;
const initApi = require('./router/api');


initApi.loggin(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});