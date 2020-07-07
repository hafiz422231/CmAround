import React from 'react'


const ButtonComponent = (props) => {
    return <button className={`btn ${props.className}`} {...props}>
        {props.isset ? props.icon : null}
        {props.title}
    </button>
}

export default ButtonComponent;
