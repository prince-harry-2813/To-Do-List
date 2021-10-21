import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos,deleteTodo }) => {
  return (
    <div className="list">
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
