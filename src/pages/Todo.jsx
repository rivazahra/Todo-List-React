import React from 'react'
import TodoInput from '../assets/components/TodoInput';
import TodoList from '../assets/components/TodoList';
import TodoInfo from '../assets/components/TodoInfo';
import TodoStatus from '../assets/components/TodoStatus';

function Todo() {
  return (
      <div className="flex flex-col w-[500px] mx-auto rounded-xl mt-10 p-4 my-10 bg-white ">
          <h1 className=" text-center  mb-10 font-sans font-medium text-4xl">Things to do</h1>
          <TodoInput />
            <TodoStatus/>
          <TodoList />
          <TodoInfo/>
    </div>
  );
}

export default Todo
