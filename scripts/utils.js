const fs = require("fs");


const readFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path,'utf-8', (err, data ) => {
      if(err) rej(err)
        else if(data) res(data)
    })
  })
}


const readDir = async(rootPath) => {
  return new Promise((res, rej) => {
    fs.readdir(rootPath, (err, data) => {
      if(err) rej(err)
        else if (data) res(data)
    })
  })
}

const writeToFile = async(path, content) => {
  return new Promise((res, rej) => {
    fs.writeFile(path, content, "utf-8", (err) => {
      if(err) rej(err)
        else res()
    })
  })
}

const getFilesFromDir = async(rootPath )=>{
  return new Promise((res, rej ) => {
    try {
      res(fs.readdirSync(rootPath).filter(path => fs.statSync(`${rootPath}/${path}`).isFile()))
      
    } catch (error) {
      rej(error)
    }
  })
}

module.exports = {
readFile,
readDir,
writeToFile, 
getFilesFromDir

} 