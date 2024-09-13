import fs from "fs/promises"
import fsn from "fs"
import path from "path";

const dir="/Users/Varun/Documents/Web Development/Backend/Exersises"
let files= await fs.readdir(dir); 

files.forEach((e)=>{
    let ext=e.split(".")[1]
    if(ext!="js" && ext!="json" && e.split(".").length>1){

        if(fsn.existsSync(ext)){
            fs.rename(path.join(dir,e),path.join(dir,ext,e))
        }else{
            fs.mkdir(ext)
            fs.rename(path.join(dir,e),path.join(dir,ext,e))
        }
    }
})