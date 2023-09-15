import { toast } from "react-hot-toast"
import { deleteTodo, activeToDo } from '../redux/slices/toDoSlice';
import { useDispatch, useSelector } from 'react-redux';

function ToDoList() {
    const state = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const handleDelete = (toDoId) => {
      dispatch(deleteTodo(toDoId))
      toast.success("Todo deleted successfully")
    }
  
    const handleComplete = (toDoId) => {
      dispatch(activeToDo(toDoId))
      toast.success("Todo task completed successfully")
    }

  return (
            <div className='flex-col bg-gray-500 py-1 gap-2 border-dotted border-black item-center place-content-center'>
                {
                    state?.isLoading ? 
                    (<div className='flex h-[200px] w-[200px] items-center mx-auto'><div className='loader mx-auto'></div></div>):
                    (
                        <>
                        {
                            state?.data && state?.data.map((toDoitem, index) => {
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
                        <div className='text-white'>{state?.isLoading}</div>
                        </>
                    )
                }
            </div>
        )
}

export default ToDoList