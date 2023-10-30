import React, { useContext,useEffect } from "react";
import { TodoContext } from "../../context/todo-provider";
import {  FaRegEdit, FaTrash } from "react-icons/fa";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit,todoEdit, activeStatus } = useContext(TodoContext);

  useEffect(() => {
    // Set isEdit ke false saat komponen di-mount jika tidak ada todo yang sedang diedit
    if (!todoEdit) {
      setIsEdit(false);
    }
  }, []);
  const handleStatus = (todo) => {
    let cloneTodos = [...todos];

    const index = cloneTodos.findIndex((t) => t.id === todo.id);
    cloneTodos[index].status = !cloneTodos[index].status;

    setTodos([...cloneTodos]);
  };

 
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setTodoEdit(findTodo);
    setTodoInput(findTodo.value); // Menetapkan nilai input saat tombol edit diklik
    setIsEdit(true);
  };

  const filteredTodos = todos.filter((todo) => {
    //   console.log("Todo:", todo);
    if (activeStatus === "Active") {
      return !todo.status;
    } else if (activeStatus === "Completed") {
      return todo.status;
    }
    return true; // Jika status adalah 'All', tampilkan semua todos
  });

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="flex justify-between w-[400px] border-solid border-2 border-gray-300  rounded-md p-3 mt-5 cursor-pointer">

          <span onClick={() => handleStatus(todo)} className={todo.status ? "line-through" : ""}>
            {todo.value}
          </span>
          <div className="flex gap-2">
            <button onClick={() => handleEdit(todo)}>
              <FaRegEdit />
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <FaTrash color="#132043" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
