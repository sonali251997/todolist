import React from "react";
import styled from "styled-components";

const Item = ({data, deleteHandler, statusHandler}) =>{
    return(
        <Style>
           <div>
              <p className={ data.status ? 'done' : ''} onClick={() => statusHandler(data.id)}> {data.title}</p>
               <span onClick={() => deleteHandler(data.id)}>Delete</span>
            </div>
        </Style>
    )
}

export default Item;

const Style = styled.div`
div{
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    box-shadow: 0 0 5px 1px #ccc;
    border-radius: 10px;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items:baseline;

    p{
        &.done{
            text-decoration: line-through;
            color: #333;
        }

        &:hover{
            cursor:pointer;
        }
    }
 
    span{
        display:none;
        color:red;

        &:hover{
            cursor:pointer;
        }
    }
     &:hover{
         span{
             display:inline;
         }
     }

}
   

`