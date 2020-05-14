import React from 'react'
//Higher Order Components
//WrappedComponenent is just going to pass the Componenet that we wrapped in our HOC
const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColour =  colours[Math.floor(Math.random() * 5)]
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow