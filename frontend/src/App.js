import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { createTodo, getTodo, deleteTodo, activeToDo } from '../src/services/APIs'
import { toast } from "react-hot-toast"

function App() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (name, description) => {
      if(name === "" || description === "")
      {
        toast.error("Name and description is required")
      }
      else
      {
        createTodo(name, description, setToDoList, setName, setDescription);
        toast.success("Todo created successfully")
      }
  }

  const handleDelete = (toDoId) => {
    deleteTodo(toDoId, setToDoList)
    toast.success("Todo deleted successfully")
  }

  const handleComplete = (toDoId) => {
    activeToDo(toDoId, setToDoList)
    toast.success("Todo task completed successfully")
  }
  useEffect( () => {
      getTodo(setToDoList)
  }, [])

  return (
    <>
      {/* Wrapper */}
        <div className='flex gap-4 flex-col w-11/12 max-w-[800px]'>
            <div className='flex gap-4 flex-col'>
              {/* Section-1 */}
              <div className='text-white text-center text-6xl'>My Todos</div>
            
              {/* Section-2 */}
                <div className='flex justify-between items-center bg-gray-500 px-2 py-4'>
                  <div className='flex gap-5'>
                    <div className=''>
                      <div className='text-white text-lg'>Name</div>
                      <div className='mt-2'>
                        <input className='rounded-2xl px-2 py-2 border-amber-600 border-[2px]'
                          type="text"
                          placeholder="Name..."
                          value={name}
                          onChange={(e) => {setName(e.target.value)}}
                        >
                        </input>
                      </div>
                    </div>
                    <div className=''>
                      <div className='text-white text-lg'>Description</div>
                      <div className='mt-2'>
                        <input className='rounded-2xl px-2 py-2 border-amber-600 border-[2px]'
                          type="text"
                          placeholder="Description..."
                          value={description}
                          onChange={(e) => {setDescription(e.target.value)}}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className='text-white bg-amber-600 rounded-3xl px-4 py-2' onClick={() => handleSubmit(name, description)}>Add ToDo</button>
                  </div>
                </div>
            </div>

            {/* Section-3 */}
            <div className='flex-col bg-gray-500 py-1 gap-2 border-dotted border-black'>
              {
                toDoList.map((toDoitem, index) => {
                  return (
                    <div key={index} className='flex justify-between mt-2 items-center border-b-[2px] border-gray-700 border-dashed w-full px-2 py-2'>
                    <div>
                      {
                        !toDoitem.active ? 
                        (
                          <>
                            <div className='text-slate-400 text-4xl line-through'>{toDoitem.toDoName}</div>
                            <div className='text-slate-400 line-through'>{toDoitem.toDoDescription}</div>
                          </>
                        ): 
                        (
                          <>
                            <div className='text-amber-600 text-4xl'>{toDoitem.toDoName}</div>
                            <div className='text-white'>{toDoitem.toDoDescription}</div>
                          </>
                        )
                      }
                    </div>
                    <div>
                      {
                        !toDoitem.active ? (<div></div>) : 
                        (
                          <>
                            <button className='text-green-500 bg-white border-green-500 border-[2px] rounded-3xl px-5 py-1 mr-2'
                                    onClick={() => handleComplete(toDoitem._id)}>
                                    Complete
                            </button>
                          </>
                        )
                      }
                      <button className='text-red-500 bg-white border-red-500 border-[2px] rounded-3xl px-5 py-1 mr-2' 
                              onClick={() => handleDelete(toDoitem._id)}>
                              Delete
                      </button>
                    </div>
                  </div>
                  );
                })
              }
            </div>
        </div>
    </>
  );
}

export default App;
