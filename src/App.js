import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
import styled from "styled-components";
// import { isTemplateElement } from '@babel/types';

// const todoData = [

// ]

const Wrapper = styled.div`
  width: 60vw;
  min-height: 50vh;
	border-radius: 12px;
  background: rgb(142,184,3, .4);
  border: 3px solid rgb(236,248,157);
  align-items: center;
  display: flex;
  flex-direction:column;
       font-family: 'Abril Fatface', cursive;

`;

class App extends React.Component {
	constructor() {
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
				if (task.id === id) {
					return {
						...task,
						completed: !task.completed
					};
				} else {
					return task;
				}
			})
		});
	};

	addTask = taskName => {
		const newTask = {
			name: taskName,
			id: Date.now(),
			completed: false
		};
		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	};

	clearCompleted = () => {
		console.log("hello from clear completed");
		const uncompletedTasks = this.state.tasks.filter(task => !task.completed);
		this.setState({
			tasks: uncompletedTasks
		});
	};

	render() {
		return (
			<Wrapper>
				<h1>React Todo List</h1>
				<TodoForm addTask={this.addTask} />
				<TodoList
					tasks={this.state.tasks}
					toggleTask={this.toggleTask}
					clearCompleted={this.clearCompleted}
				/>
			</Wrapper>
		);
	}
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
