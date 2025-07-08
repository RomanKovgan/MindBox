import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

interface Props {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
