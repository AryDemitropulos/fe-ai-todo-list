import React, { useState } from "react";
import { useTodoContext } from "../context/todoContext";

export const useTodos = () => {
  const { setLoading, setTodos } = useTodoContext();
  const getTodos = (text) => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")//TODO AGUS: CAMBIAR URLS QUE TRAIGA SOLO 8
      .then((response) => response.json())
      .then((json) => {
        setTodos(json.slice(0, 8)); //TODO AGUS: SACAR QUE TRAIGA SOLO 8
      })
      .finally(() => setLoading(false));
  };
  return { getTodos };
};
