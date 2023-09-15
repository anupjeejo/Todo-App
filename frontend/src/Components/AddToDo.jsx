import { toast } from "react-hot-toast"
import { useEffect, useState } from 'react';
import { createTodos, fetchTodos } from '../redux/slices/toDoSlice';
import { useDispatch } from 'react-redux';

function AddToDo() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (name, description) => {
        if(name === "" || description === "")
        {
          toast.error("Name and description is required")
        }
        else
        {
          const passVar = [name, description]
          dispatch(createTodos(passVar))
          setName("")
          setDescription("")
          toast.success("Todo created successfully")
        }
    }

    useEffect( () => {
        dispatch(fetchTodos())
      }, [])

  return (
        <div className='flex justify-between items-center bg-gray-500 px-2 py-4'>
            <div className='flex gap-5'>
              <div>
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

              <div>
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
  )
}

export default AddToDo