require('colors')

//const { pausa } = require('./helpers/mensajes')
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Task = require('./model/task');
const Tasks = require('./model/tasks');
//const { pausa } = require('./helpers/mensajes');

const main = async() => { 

  let opcion = ''

  do {
    opcion = await inquirerMenu() 
    
    // console.log({opcion})
    

    switch (opcion) {
      case '1':
          const tareas = new Tasks()
          tareas.addTask('Comprar comida')
          console.log('Resp:',tareas)
        break;
    
      default:
        break;
    }
        
    
        
    await pausa();

    //if (opcion !== '0') await pausa();
  } while (opcion !== '0');
  
}

main()