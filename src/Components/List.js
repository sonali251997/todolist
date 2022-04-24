
import React from "react";
import styled from "styled-components";
import Item from "./Item";
const List = ({tasks, deleteHandler, statusHandler}) =>{
  
    
    return(
        <React.Fragment>
            {
                tasks.length ?
                
                <Style>
            {
                tasks.map( task => <Item key={task.id} data={task} deleteHandler ={deleteHandler} statusHandler={statusHandler}/>)
            }
                </Style>
                :

                <h5>Please Add some task</h5>
            }
        
        </React.Fragment>
    )
}

export default List;

const Style = styled.div`
max-width: 400px;
margin 0 auto;

`