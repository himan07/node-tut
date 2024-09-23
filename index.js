const fs = require("fs");
const http = require("http");

/* blocking synchronous way*/
const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn);

const textOut = `This is : ${textIn}`;
fs.writeFileSync("./output.txt", textOut);

/*  
Reading and writing files asynchronously
non-blocking asynchronous way
*/

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.error(err);
  fs.readFile(`./txt/${data1.trim()}`, "utf-8", (err, data2) => {
    if (err) return console.error(err);
    console.log(data2);
    fs.readFile("./txt/output.txt", "utf-8", (err, result) => {
      console.log(result);
      fs.writeFile("./txt/final.txt", `${data2}\n${result}`, "utf-8", (err) => {
        console.log("Your file has been written!");
      });
    });
  });
});




