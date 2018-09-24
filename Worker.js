const fs = require('fs');

let readable = fs.createReadStream('Message.json');

readable.on('data', (chunk) => {

const obj = JSON.parse(chunk);
const arr = obj.Messages;

console.log("Welcome to the place");
console.log("I hear its a great place");

let i = 0;
setInterval(() => {
  console.log(arr[i % 4].Contents);
  i += 1;
}, (obj.Transition.Sleep * 750));

});
