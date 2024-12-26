import React from 'react';

const TaskLists = () => {
  return (
    <div className='taskListsContainer'>
      <div className='taskLists'>
        <p>Task 1</p>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash" style={{color: 'red'}}></i>
        </div>
      </div>

      <div className='taskLists'>
        <p>Task 2</p>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash" style={{color: 'red'}}></i>
        </div>
      </div>

      <div className='taskLists'>
        <p>Task 3</p>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash" style={{color: 'red'}}></i>
        </div>
      </div>

      <div className='taskLists'>
        <p>Task 4</p>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash" style={{color: 'red'}}></i>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
