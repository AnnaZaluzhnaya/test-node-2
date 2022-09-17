

// const http = require('http');
// const fs = require('fs').promises;



// const PORT = 8081;

//обработчик запроса(функция) //первый - запрос, второй - ответ 
//ответом будет текст
// const requestHandler = (request, response) => {
//     response.writeHead(200, {'Content-type':'text/html'});   //  запись в заголовок
//     response.end('<h1>Hello</h1>'); //запись в тело (body)
// }  

//чтение каждый раз при обращении клиента 
// const requestHandler = async (request, response) => {
//     const manifest = await fs.readFile('./package.json','utf8')
//         response.writeHead(200, {'Content-type':'text/json'});   //  запись в заголовок
//         return response.end(manifest) //читаем файл на любой странице при запуске 
    
    
// }  

//чтение при запуске-----------
// const fs = require('fs');
// const manifest = fs.readFileSync('./package.json','utf8')
// const requestHandler = (request, response) => {
    
//         response.writeHead(200, {'Content-type':'text/json'});   //  запись в заголовок
//         return response.end(manifest) //читаем файл на любой странице при запуске 
    
    
// }  

//ветвления
// const requestHandler = (request, response) => {
//     if(request.url.indexOf('/home') >= 0){
//         response.writeHead(200, {'Content-type':'text/json'});   //  запись в заголовок
//         // response.end(JSON.stringify({a:5, b:8, c:[]})); //запись в тело (body) //---можно записать текст ,джейсон или даже наш фронтенд
//         return response.end('{"url": "homepage"}')
//     }
//     response.writeHead(200, {'Content-type':'text/json'}); 
//     response.end('{"url": "other"}')
// }  

//ответом будет файл джейсон(обьект)
// const requestHandler = (request, response) => {
    
//         response.writeHead(200, {'Content-type':'text/json'});   //  запись в заголовок
//         response.end(JSON.stringify({a:5, b:8, c:[]})); //запись в тело (body) //---можно записать текст ,джейсон или даже наш фронтенд
        
    
    
// } 

// const server = http.createServer(requestHandler); //сервер создали с обработчиком

//http - 80
//https - 443
//поднимаем сервер .---вторая колбек функция запуститься тогда,когда сервер успешно запущен
// server.listen(PORT, (error) => {
// if(error){
//     console.error('Error at server:', error)
// }
// console.log(`Server works at port ${PORT}!`);
// });