import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SearchBox } from "./components/SearchBox";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <div className="md:w-[500px]">
        <SearchBox />
        <TodoList />
      </div>
    </>
  );
}

export default App;
