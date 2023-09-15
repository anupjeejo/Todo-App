import './App.css';
import React from 'react';
import ToDoList from './Components/ToDoList';
import AddToDo from './Components/AddToDo';
import ToDoTitle from './Components/ToDoTitle'


function App() {

  return (
    <>
      {/* Wrapper */}
        <div className='flex gap-6 flex-col w-11/12 max-w-[800px] p-10'>
            <div className='flex gap-6 flex-col'>
              {/* Section-1 */}
              <ToDoTitle/>
              
              {/* Section-2 */}
              <AddToDo/>
            </div>

            {/* Section-3 Component */}
            <ToDoList />
        </div>
    </>
  );
}

export default App;
