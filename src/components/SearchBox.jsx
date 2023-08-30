import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { useTodoContext } from "../context/todoContext";

export const SearchBox = () => {
  const [text, setText] = useState("");
  const { getTodos } = useTodos();
  const { loading } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    getTodos(text);
  };

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">
        Your day...
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 ">
        <textarea
          id="chat"
          rows="1"
          onChange={handleTextChange}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder=" Your day..."
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
        >
          <svg
            className={`w-5 h-5 rotate-90 ${loading && "animate-bounce"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={loading ? "grey" : "currentColor"}
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};
