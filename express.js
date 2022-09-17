//EXPRESS//------------------------------------------------------------
const { request, response } = require('express');
const express = require('express');
const app = express();

const morgan = require('morgan');

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({extended:true}));//парсит стандартные данные с форм
app.use(morgan('tini')); //публичній мидеолвер

app.use(express.static('public')); //делает директорию на сервере публичной 

// app.get('/home', (request,response) => {
//     response.sendStatus(200);
// });

//middlewere который передает дальше действия--------------
app.use((req,res,next) => {
    console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`)
    next();
});

// app.post('/home', (req,res) => {
//     console.log(req.body);
//     res.json({javascript: 'object', body:req.body});
// });

app.post('/home', (req,res) => {
    if(!req.statusCode.goit){
        return res.status(400).json({status:'goit parameter is required'})
    }
    res.json({javascript: 'object', body:req.body});
});


// app.get('/home', (request,response) => {
//     response.send('get request');
// });  

// app.post('/home', (request,response) => {
//     response.send('post request');
// });

// app.delete('/home', (request,response) => {
//     response.send('delete request');
// });

//метод для всех//если не один из обработчиков вверху не ответил на запрос клиента ..первый параметр убран
// app.use((request,response) => {
//     response.send('middleware request');
// });



app.listen(PORT, (error) => {
    if(error){
        console.error('Error at server:', error)
    }
    console.log(`Server works at port ${PORT}!`);
    });


//EXPRESS//------------------------------------------------------------