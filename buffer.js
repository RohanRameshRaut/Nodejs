// var myBuffer = Buffer.alloc(10);
// console.log("hello rohan raut how are you ");

// var myBuffer = Buffer.allocUnsafe(10);

// console.log(myBuffer);

// var myBuffer = Buffer.from("Rohan", "utf-8");
// console.log(myBuffer);

// // allocate memory and read from the buffer
// var myBuffer1 = Buffer.alloc(20); // it will allocate the memory only for first 20 bits including spaces.
// myBuffer1.write("hello rohan raut, how are you?",'utf-8'); 
// console.log(myBuffer1.toString('utf8'));

// //concatenate two buffers
// var buffer1 = Buffer.from("Hi ");
// var buffer2 = Buffer.from("Nirali Publication");
// var buffer3 = Buffer.concat([buffer1, buffer2]); // concat() function will take two parameters bufferName.concat(list, lengh) list--> array list of buffer object.
// console.log("buffer after conctenate: "+buffer3.toString('utf-8'));


// compare buffer 
var buffer1 = Buffer.from("Hello");
var buffer2 = Buffer.from("kaver");

var result = buffer1.compare(buffer2); // shows 0 if they are equal(in alphabetical order), 1 if buffer 1 is higher(in alphabetical order), and -1 if buffer1 is lower than buffr2(in alphabetical order).
console.log("result: " + result);
if (result == 0) {
    console.log("Both are equal!");
}
else if (result == 1) {
    console.log("buffer1!");
}
else {
    console.log("buffer2 is greater!");

}

// example
// var buf1 = Buffer.from('abc');
// var buf2 = Buffer.from('abc');
// var x = Buffer.compare(buf1, buf2);
// console.log(x);

// var buf1 = Buffer.from('a');
// var buf2 = Buffer.from('b');
// var x = Buffer.compare(buf1, buf2);
// console.log(x);

// var buf1 = Buffer.from('b');
// var buf2 = Buffer.from('a');
// var x = Buffer.compare(buf1, buf2);
// console.log(x);