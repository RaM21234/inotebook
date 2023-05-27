import React from 'react'

const Alert = (props) => {
    return (
        <>
            <div className="alert alert-primary" role="alert">
               {props.message}This is amazing 
            </div>
        </>
    )
}

export default Alert
