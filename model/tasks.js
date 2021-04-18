const Task = require("./task")

class Tasks {

  _listado = {}


  constructor () {
    this._listado = {}
  }

  addTask(desc = '') {
    const task = new Task(desc)
    
    this._listado[task.id] = task
    
  }

  addTaskFromArray(tasks = []) {
    tasks.forEach(task => {
      
      this._listado[task.id] = task
    })
    
  }

  get taskListArr() {
    //console.log('Resp:',tareas)
    const listado = []

    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })
    
    // console.log(listado)
    
    return listado
    
  }
  
}

module.exports = Tasks