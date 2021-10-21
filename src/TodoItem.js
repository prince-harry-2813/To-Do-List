import React, { useState } from "react";
import useInputHook from "./hooks/UseInputHook";


const TodoItem = ({ todo, deleteTodo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const [isEditing, setIsEditing] = useState(false);

  const [value, handleChange] = useInputHook(todo.text);

  const handleCheck = (event) => {
    setCompleted(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    handleEdit(value);
  };

  const handleEdit = (etext) => {
    todo.text = etext;
  };

  return (
    <div className="list-item">
      <div className="box-input">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={handleCheck}
        />
        {isEditing ? (
          <form className="edit-form" onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              value={value}
              onChange={handleChange}
            ></input>
            <div>
              <button type="submit" className="save">
                Save
              </button>
            </div>
          </form>
        ) : (
          <div style={{ textDecoration: completed ? "line-through" : "none" }}>
            {todo.text}
          </div>
        )}
      </div>
      <div>
        <button className="edit" onClick={() => setIsEditing(!isEditing)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
