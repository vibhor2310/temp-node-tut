const {readFileSync,writeFileSync} = require('fs'); 
// Both Are Same things
// const fs =require('fs');
// fs.readFileSync
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
console.log(first);

const second = readFileSync('./content/second.txt','utf8');
console.log(second);

console.log(first,second);

writeFileSync('./content/result-sync.txt',
`Here is the result: ${first},${second} `,
{flag:'a'}  //This is used to not change the text written but to append or add the text
);
console.log('end');
console.log('starting the new task');