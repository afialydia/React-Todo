import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css'
// import { isTemplateElement } from '@babel/types';

// const todoData = [
  
// ]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    };
    this.toggleTask = this.toggleTask.bind(this);
  }

  toggleTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id){
          return{
            ...task,
            completed: !task.completed
          };
        }else{
          return task;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  };

  clearCompleted = () =>{
    console.log("hello from clear completed")
   const uncompletedTasks = this.state.tasks.filter(task => !task.completed)
    this.setState({
      tasks: uncompletedTasks
    });
  };
  
  render(){
    return(
      <div>
        <div>
          <h1>Task List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}
        clearCompleted = {this.clearCompleted}
        />
      </div>
    )
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
    
  
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
