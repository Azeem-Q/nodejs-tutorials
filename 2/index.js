// chapter 2 - write files

const fs = require('fs');

fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

