const express = require("express");
const router = express.Router();

const loggin = (app) => {
    router.get('/');

    return app.use('/api/', router);
}



module.exports = {
    loggin
}