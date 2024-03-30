// CRUD --->create,Read, Delete, update (file operations). 

const fs = require('fs');
// 1) Create a forlder named it thapa 
// fs.mkdirSync("thapa");-->(creating directry make directry)

// 2) Create a file name bio.txt and data into it. 
// fs.writeFileSync("thapa/bio.txt", "my name is vinod thapa.");

// 3) Append the data 
// fs.appendFileSync("thapa/bio.txt", " And I am a YouTuber.")

// 4) Read the data without getting the buffer data. 
// const data = fs.readFileSync("thapa/bio.txt","utf-8");
//encoding(utf-8(Unicode Transforamation Format 8-bit) is capable of encoding all 1,112,064 valid Unicode code ponts)
// Unicode-->is a set of characters used around the world 
// UTF-8 --> stackoverflow krke dekh length. 
// console.log(data);

// 5) Rename the file name to mybio.txt 
// fs.renameSync("thapa/bio.txt", "thapa/myBio.txt");

// 6) Now delete both the file and the folder. 
// fs.unlinkSync("thapa/myBio.txt"); -->for deleting the txt file
fs.rmdirSync("thapa");
// -->for deleting the entire folder(remove directory)




