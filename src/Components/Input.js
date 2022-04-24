import React, { useState } from "react";
import styled from "styled-components";

const Input = ({addHandler}) =>{
   
    const[task, setTask] =useState("");

    const submit = () => {
        if(task.length){
            addHandler(task);
            setTask('');
        }
        
    }

    return(
       <Style>
           <input  type="text" placeholder="type here" value={task} onChange={(e) => setTask(e.target.value)}/>
           <button onClick={submit}>Add</button>
       </Style>
    );
}

export default Input;

const Style = styled.div`

display: flex;
justify-content: space-between; 
 
input{
    margin-right:20px;
    border:none;
    border-bottom: 1px solid #e3e3e3;
    outline: none;
    width:300px;
    padding:10px;
    font-size:1.2rem;
    color: #333;
}

button{
    padding: 10px 20px;
    color:white;
    background:#007bff;
    border-radius: 5px;
    border:none;

    &:hover{
        cursor:pointer;
    }
}
`