// ----------- ASYNC AWAIT  c TRY CATCH-----------
// -------запись файла---------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)

//         const NewContent = `${data} apple`
//         await fs.writeFile('./dataNew.txt', NewContent,'utf8')

//     }catch(error){
//         console.error(error)
//     }
// })();

// ----------- ASYNC AWAIT  c TRY CATCH-----------
// -------запись инфы измененной в новый файл + переименование--------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)

//         const NewContent = `${data} apple`
//         await fs.writeFile('./dataNew.txt', NewContent,'utf8')

//         await fs.rename('./dateUtils.js', './newDateUtils.js')

//     }catch(error){
//         console.error(error)
//     }
// })();

// ----------- ASYNC AWAIT  c TRY CATCH-----------
// -------дозаписать инфу в файл существующий --------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)

        
//         await fs.appendFile('./dataNew.txt', 'love you','utf8')

        

//     }catch(error){
//         console.error(error)
//     }
// })();

// ----------- ASYNC AWAIT  c TRY CATCH-----------
// -------перемещение в другое место(папку) --------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)

//         await fs.rename('./newDateUtils.js', './tnp/newDateUtils.js')

//     }catch(error){
//         console.error(error)
//     }
// })();

// ----------- ASYNC AWAIT  c TRY CATCH-----------
// -------читаем созданную директорию  --------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)

//         console.log(await fs.readdir('./tnp'))
//     }catch(error){
//         console.error(error)
//     }
// })();

// ----------- ASYNC AWAIT  c TRY CATCH-----------
// -------удаление --------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)

//         console.log(await fs.readdir('./tnp'))

//         await fs.unlink('./tnp/remove.js')

//     }catch(error){
//         console.error(error)
//     }
// })();


// PROMISES__________
// const fs = require('fs').promises;
// const path= require('path');

// fs.readFile(path.resolve('./data.txt'),'utf8')
// .then(data => {
//     console.log(data)
// })
// .catch(error => console.error)

// console.log(1234567)

// ----------- ASYNC AWAIT -------------
// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//     console.log(data)
// })();

// ----------- ASYNC AWAIT  c TRY CATCH-------------

// const fs = require('fs').promises;
// const path= require('path');

// (async() => {
//     try{
//         const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
//         console.log(data)
//     }catch(error){
//         console.error(error)
//     }
// })();


// FS MODULE________________
// const fs = require('fs')
// const path = require('path')

// fs.readFile('./data.txt','utf8',(error,data) => {
//     if(error){
//         console.error(error);
//     }
// console.log(data);
// })

// 2 вариант асинхронно выполняется 

// fs.readFile(path.resolve('./data.txt'),'utf8',(error,data) => {
//     if(error){
//         console.error(error);
//     }
// console.log(data);
// })

// console.log(1234567)

// 3 вариант синхронно выполняется (лучше не использовать ,только можно при моменте инифиализации(запуска) приложения)

// const data = fs.readFileSync(path.resolve('./data.txt'),'utf8');
// console.log(data)

// console.log(1234567)

// --читаем ./package.json' ----

// fs.readFile(path.resolve('./package.json'),'utf8',(error,data) => {
//     if(error){
//         console.error(error);
//     }
// console.log(data);
// })

// PATH MODULE________________
// const path = require('path')

// console.log(path.resolve('dateUtils.js'))

// --возвращает абсолютный путь--
// const qwe = path.resolve('./dateUtils.js') 
// --возвращает относительный путь--
// const qwe1 = './dateUtils.js'

// CLI --------

// const Calc = require('calc-js').Calc;

// const [,,a,b] = process.argv; 1 вариант

// const a = process.argv[2];
// const b = process.argv[3];


// console.log(process.argv);

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish())


// EXAMPLE--------------

// console.log("Anna");

// const {getCurrentDate} = require('./dateUtils.js')
// global.testData = 'Hello';
// console.log(`get current date function result: ${getCurrentDate()}`)
// console.log(global.testData)

// console.log(process.argv)


// console.log(__filename);
// console.log(__dirname);