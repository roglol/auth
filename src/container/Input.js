import React from 'react';

const Input = (props) =>{
    return (
        <input 
        onChange={(e)=>props.onChange(e,props.amitkeni)}
        type="text" 
        id="inputEmail" 
        className="form-control"  
        required 
        autoFocus/>
    )
}

export default Input;

