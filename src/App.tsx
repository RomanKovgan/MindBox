import { useMemo, useState } from "react";
import useTodos from "./hooks/useTodos";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

import styles from "./App.module.scss";
import TodoControls from "./components/TodoControls/TodoControls";

function App() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();

  const filteredTodos = useMemo(() => {
    return filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);
  }, [todos, filter]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo App</h1>

      <TodoForm onAdd={addTodo} />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <TodoControls
        activeFilter={filter}
        todosCount={todos.filter((todo) => !todo.completed).length}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
