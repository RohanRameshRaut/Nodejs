const fs = require("fs");

// creting a new file 
// fs.writeFileSync("read.txt", "welcome to my channel");
// fs.writeFileSync("read.txt", "welcome to the music world");
// fs.appendFileSync("read.txt",", with BoAt airdops 170");

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);
//output--->> this is a buffer data, If no encoding is specified, then the raw buffer is returned.
{/* <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 74 68 65 20 6d 75 73 69 63 20 77 
6f 72 6c 64 2c 20 77 69 74 68 20 42 6f 41 74 20 61 69 72 64 6f 70 73 20 31 37 30> */}

// //correct read.txt
// org_data = buf_data.toString();
// console.log(org_data);


//rename file.
fs.renameSync('read.txt', 'readwrite.txt');












