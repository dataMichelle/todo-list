import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodos(todoValue);
      setTodoValue(""); // Clear the input after adding the todo
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue(""); // Clear the input after adding the todo
        }}
      >
        Add
      </button>
    </header>
  );
}
