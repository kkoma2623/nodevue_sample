const fs = require('fs');
const util = require('util');

// console.log('aaaa')
// util.log('bbbb', __dirname)
fs.readFile(__dirname + '/test.json', 'utf-8', (err, data) => {
    if (err) return console.error(err);

    util.log("data>>", data);
});

util.log("---------------------------");

const msgFile = __dirname +'/message.txt'
fs.writeFileSync(msgFile, 'Hello Node.js 갓종대왕', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// return;
// let data2 = fs.readFileSync(__dirname + '/test.json', 'utf-8');
let data2 = fs.readFileSync(msgFile, 'utf-8');
util.log("data2>>", data2);

util.log("============================");