import React from "react";
import Task from "./Task";
import styled from "styled-components";

const TodoDiv = styled.div`
border: 3px solid;`


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