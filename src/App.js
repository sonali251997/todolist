import React, {useState} from 'react';
import './App.css';
import { Input, List} from "./Components";

function App() {
 
  const[tasks, setTasks] = useState([

    {
        id: 1,
        title: 'Newspaper',
        status: 0
    },
    {
        id: 2,
        title: 'Laptop',
        status: 0
    },
    {
        id: 3,
        title: 'Battery',
        status: 1
    }
]);

const addTask = (task) => {
  const obj = {
     id: Math.floor((Math.random() * 100) + 1),
     title: task,
     status: 0
  }
  setTasks([...tasks, obj]);
  
}
 
const deleteTask = (id) => {
  const  newtask = tasks.filter(task => task.id !== id);
  setTasks(newtask);
}

const toggleStatus = (id) => {
  const newTask = tasks.map(task => {
    if(task.id === id){
      task.status? task.status = 0 : task.status =1 ;
    }
    return task;
  })
  setTasks(newTask);
}


  return (
    <div className="App">
      <Input addHandler = {addTask}/>
      <List tasks= {tasks} deleteHandler = {deleteTask} statusHandler ={toggleStatus}/>
    </div>
  );
}

export default App;
