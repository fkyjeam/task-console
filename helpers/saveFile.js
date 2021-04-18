const fs = require('fs');

const archivo = './db/data.json'

const saveFile = ( data ) => {

  fs.writeFileSync(archivo, JSON.stringify(data))
}

const readFile = (params) => {
  if (!fs.existsSync(archivo)) {
    return null
  }

  const info = fs.readFileSync(archivo,{encoding:'utf-8'})
  const data = JSON.parse(info)
  
  //console.log(data)

  return data
  
}

module.exports = {
  saveFile,
  readFile
};

