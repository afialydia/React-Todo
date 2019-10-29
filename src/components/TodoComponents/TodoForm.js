import React from "react";
import styled from 'styled-components'

const Form = styled.form`
margin: 0 auto;
display: flex;
flex-direction:column;
`
class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            task: ""
        };
    }

    handleChange= e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    };

    render(){
        return(
            <Form onSubmit={this.submitTask}>
                <input 
                type="text"
                value={this.task}
                name="task"
                onChange={this.handleChange}
                />

                <button>Add Task</button>
            </Form>
        )
    }
}

export default TodoForm;