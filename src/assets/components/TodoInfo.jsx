import React, { useContext } from 'react'
import { TodoContext } from '../../context/todo-provider';

function TodoInfo() {
    const {todos} = useContext(TodoContext)
  return (
    <div className='flex justify-center'>
          <div className=" flex items-center justify-center bg-blue-600 text-white p-2 rounded-lg  font-semibold mt-5 text-align-center w-20">{todos.length} Todo</div>
    </div>
  );
}

export default TodoInfo
