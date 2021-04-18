require('colors')

//const { pausa } = require('./helpers/mensajes')
const { inquirerMenu, 
        pausa,
        leerInput } = require('./helpers/inquirer');

const Task = require('./model/task');
const Tasks = require('./model/tasks');
//const { pausa } = require('./helpers/mensajes');

const main = async() => { 

  let opcion = ''
  const tareas = new Tasks()
  
  do {
    opcion = await inquirerMenu() 
    
    // console.log({opcion})
    
    

    switch (opcion) {
      case '1':
        
        const valor = await leerInput('Favor ingrese una tarea:');

        tareas.addTask(valor)
        
        
        break;
        case '2':
          
        console.log(tareas.taskListArr)
        
        

        break;
      default:
        break;
    }
        
    
        
    await pausa();

    //if (opcion !== '0') await pausa();
  } while (opcion !== '0');
  
}

main()