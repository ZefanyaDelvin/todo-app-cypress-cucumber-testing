import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const markTodoComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div data-cy="todo-page">
      <h1>To-Do List</h1>
      <input
        data-cy="new-todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new to-do"
      />
      <button data-cy="add-todo-button" onClick={addTodo}>
        Add To-Do
      </button>
      <ul data-cy="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            data-cy={`todo-item-${index}`}
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
            <button
              data-cy={`complete-todo-${index}`}
              onClick={() => markTodoComplete(index)}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              data-cy={`delete-todo-${index}`}
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
