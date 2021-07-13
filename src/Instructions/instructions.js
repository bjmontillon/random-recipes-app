import React from 'react'
import '../Instructions/instructions.css'

const Instructions = ({ instructionsState }) => {
    return (
        <div className='instruction-wrapper'>
            <p className="instructions">{ instructionsState }</p>
        </div>
    )
}

export default Instructions