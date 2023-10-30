import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todo-provider";
function TodoStatus() {
 
    
    
    const { handleStatusChange } = useContext(TodoContext)
   
  return (
    <div className="flex justify-center gap-5 my-5 ">
      <span onClick={() => handleStatusChange("All")} className="bg-gray-300 px-3 py-2 rounded-md">
        All
      </span>
      <span onClick={() => handleStatusChange("Active")} className="bg-gray-300 px-3 py-2 rounded-md">
        Active
      </span>
      <span onClick={() => handleStatusChange("Completed")} className="bg-gray-300 px-3 py-2 rounded-md">
        Completed
      </span>
    </div>
  );
}


export default TodoStatus;
