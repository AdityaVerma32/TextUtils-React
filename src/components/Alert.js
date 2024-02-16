import React from 'react'

function Alert(props) {

    // function to capitalize first letter of word
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fadeshow`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>

    )
}

export default Alert