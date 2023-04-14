import React from 'react'
import './styles/newexercise.css'

const NewExercise = (props) => {
  return (
    <div>
      <h1 onClick={props.handleClick} className='exercise-title'>New Exercise</h1>
    </div>
  )
}

export default NewExercise
