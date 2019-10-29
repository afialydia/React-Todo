import React from "react";
import styled from "styled-components";
import './Todo.css';

const TodoDiv = styled.div`
  border: 3px solid rgb(236,248,157);
  background: rgb(236,248,157);
  `


const Task = props => {
    return(
        <TodoDiv className={`task ${props.task.completed ? 'completed' : ''}`}
        onClick={()=> props.toggleTask(props.task.id)}>
            <p>{props.task.name}</p>
        </TodoDiv>
    )
}

export default Task;