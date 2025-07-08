import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.scss";

interface Props {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        <span
          className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
        >
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className={styles.deleteButton}
        aria-label="Delete"
      >
        <FaTrash size={14} />
      </button>
    </li>
  );
}
