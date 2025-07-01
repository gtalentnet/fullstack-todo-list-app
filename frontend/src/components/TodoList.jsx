import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchTodos() {
      const res = await axios.get('/api/todos');
      setTodos(res.data);
    }
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const res = await axios.post('/api/todos', { text });
    setTodos([...todos, res.data]);
    setText('');
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nuevo todo"
      />
      <button onClick={addTodo}>Agregar</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
