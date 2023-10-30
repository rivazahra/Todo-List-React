import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../context/todo-provider";

function TodoInput() {
  const { todos, setTodos, todoEdit, setTodoEdit } = useContext(TodoContext);
  const [input, setInput] = useState("");
 
  useEffect(() => {
      if (todoEdit !== null && todoEdit !== undefined) {
        setInput(todoEdit?.value || "");
      } else {
        setInput("");
      }
  }, [todoEdit]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) {
      return;
    }
   else if (!todoEdit || !Object.keys(todoEdit).length) {
      // If todoEdit is an empty object, add a new todo
      const newTodo = {
        id: new Date(),
        value: input,
        status: false,
      };
      setTodos([...todos, newTodo]);
    } else {
      const editedTodos = todos.map((todo) => (todo.id === todoEdit.id ? { ...todo, value: input } : todo));
      setTodos(editedTodos);
      setTodoEdit(null); // Exit edit mode after editing is done
    }
    setInput("");
  }

  return (
    <form action="" className="flex justify-center gap-5">
      <input type="text" className="border-solid border-2 border-gray-400 rounded-sm p-3 h-10 w-[300px]" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick} className="flex border-solid  rounded-xl font-semibold text-white p-3 h-10 items-center bg-blue-500">
        { "Tambah"}
      </button>
    </form>
  );
}


export default TodoInput;
