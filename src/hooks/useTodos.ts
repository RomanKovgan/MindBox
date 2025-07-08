import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };
}
