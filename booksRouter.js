const express = require('express');
const router = express.Router();

router.get('/weather',(req,res) => {
    res.json({books:[]})
});

router.post('/books',(req,res) => {
    res.json({books:[1,2]})
})


module.exports = {router}