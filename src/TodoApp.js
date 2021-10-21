import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const InitialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(InitialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), text: task, completed: false }]);
  };

  const deleteTodo = (todoId) => {
    //filter
    const filterdTodos = todos.filter((todo) => todo.id !== todoId);

    //set
    setTodos(filterdTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};

export default TodoApp;
