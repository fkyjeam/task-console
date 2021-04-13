require('colors')

//const { pausa } = require('./helpers/mensajes')
const { inquirerMenu } = require('./helpers/inquirer')

const main = async() => { 

  let opcion = ''

  do {
    opcion = await inquirerMenu() 
    
    //console.log({opcion})
    //if (opcion !== '0') await pausa();
  } while (opcion !== '0');
  
}

main()