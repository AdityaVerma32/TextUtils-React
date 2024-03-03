import React from 'react'

function Alert(props) {

    // function to capitalize first letter of word
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

      <div className='container 50px' style={{height:'50px'}}>
         { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fadeshow`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
      </div>

    )
}

export default Alert