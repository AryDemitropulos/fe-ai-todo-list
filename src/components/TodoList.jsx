import React from "react";
import { TodoItem } from "./TodoItem";
import { useTodoContext } from "../context/todoContext";
import { useTodos } from "../hooks/useTodos";
import { Loading } from "./Loading";

export const TodoList = () => {
  const { todos, loading } = useTodoContext();
  return (
    <>
      <div className="mt-16 relative">
        {loading ? (
          <Loading />
        ) : (
          todos && (
            <>
              <h3 className="mb-4 font-semibold text-gray-900">Your tasks:</h3>
              <ul className=" flex flex-col gap-3 items-center w-full text-sm font-medium text-gray-90">
                {todos.map((todo) => (
                  <TodoItem key={todo.id} {...todo} />
                ))}
              </ul>
            </>
          )
        )}
      </div>
    </>
  );
};
