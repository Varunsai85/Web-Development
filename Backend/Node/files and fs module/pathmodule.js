import path from "path"
// console.log(path);
let myPath="/Users/Varun/Documents/Web Development/Backend/Node/files and fs module/varun.txt"
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.basename(myPath));
let joinPath=path.join("/Users/Varun/Documnets/Web Development","/new Backend/varun.txt");
console.log(path.dirname(joinPath));