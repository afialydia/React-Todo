import React from "react";
import Task from "./Task";
import styled from "styled-components";

const TodoDiv = styled.div`
min-height: 30%;
margin: 2% auto;
width: 98%;
border-top: 2px dotted;
display: flex;
flex-direction:column;
`


const TodoList = props => {

    return(
        <TodoDiv> 
            {props.tasks.map(task=>(
                <Task key={task.id} task={task} toggleTask={props.toggleTask}/>
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>

            
        </TodoDiv>
    );
};

export default TodoList;