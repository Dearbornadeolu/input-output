import React from "react";

const UserInput = (props)=>{
    const inputStyle ={
        border : '2px solid red',
        width: 'auto',
        display: 'block',
        margin : 'auto',
        padding: '10px',
        fontSize: '1.5rem'
    }
    return(
        <div>
            <input type="text" onChange={props.changed} value={props.currentName} style={inputStyle}/>
        </div>
    )
}

export default UserInput