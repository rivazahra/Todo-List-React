import { createContext, useState } from "react";


export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [activeStatus, setActiveStatus] = useState("All");
 
  const [todos, setTodos] = useState([
    { id: 1, value: "work out", status: false },
    { id: 2, value: "Pergi ke salon", status: false },
    { id: 3, value: "Self learning React", status: false },
  ]);

  const [todoEdit, setTodoEdit] = useState({});
 const [ setTodoInput] = useState("");
  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };



  return <TodoContext.Provider value={{ todos, setTodos, setTodoInput, todoEdit, setTodoEdit, activeStatus, handleStatusChange }}>
    
    {children}</TodoContext.Provider>;
}

export default TodoProvider;
