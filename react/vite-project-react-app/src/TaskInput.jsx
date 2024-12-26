import React from 'react'

const TaskInput = () => {
  return (
    <div>       
        <div className='taskInputContainer'>
            <input className="taskInput" 
            placeholder="Add a task"
            />
            <button className='submitBtn'>Submit</button>
        </div>
    </div>
  )
}

export default TaskInput