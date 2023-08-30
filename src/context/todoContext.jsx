import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  const value = { todos, setTodos, loading, setLoading };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within a Toast Provider");
  return context;
};
