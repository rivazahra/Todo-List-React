import React from 'react'

function Navbar() {
  return (
    <header className="flex flex-row justify-evenly bg-sky-500 p-2 items-center">
      <h1 className="font-bold text-2xl">todo</h1>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>Todo</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
