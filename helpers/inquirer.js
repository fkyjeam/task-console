require('colors')

const inquirer = require('inquirer')

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desa hacer?',
    
    choices: [
      {value: '1', name: `${'1.'.green} Crear tarea`},
      {value: '2', name: `${'2.'.green} Listar tarea`}, 
      {value: '3', name: `${'3.'.green} Listar tareas completadas`},
      {value: '4', name: `${'4.'.green} Listar tareas pendientes`},
      {value: '5', name: `${'5.'.green} Completar tarea(s)`},
      {value: '6', name: `${'6.'.green} Borrar tarea`},
      {value: '0', name: `${'0.'.green} Salir`}
    ]
  }]

const inquirerMenu = async() => {
  console.clear();
  console.log('======================'.green)
  console.log('Seleccione una Opción'.white)
  console.log('======================\n'.green)

  const {opcion} = await inquirer.prompt(preguntas)

  return opcion
}

const pausa = async() => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `\nPresione ${'Enter'.green} para continuar\n`
    }]

  await inquirer.prompt(question)

   
} 

const leerInput = async(texto) =>  {
  const entrada = [
    {
      type: 'input',
      name: 'desc',
      message: `\n ${texto} \n`
    }
  ]

  const {desc} = await inquirer.prompt(entrada)

  return desc

}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput
}