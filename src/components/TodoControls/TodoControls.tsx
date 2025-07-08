import styles from "./TodoControls.module.scss";

interface Props {
  activeFilter: "all" | "active" | "completed";
  todosCount: number;
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onClearCompleted: () => void;
}

export default function TodoControls({
  activeFilter,
  todosCount,
  onFilterChange,
  onClearCompleted,
}: Props) {
  return (
    <div className={styles.controls}>
      <span className={styles.count}>
        {todosCount} {todosCount === 1 ? "item" : "items"} left
      </span>

      <div className={styles.filters}>
        <button
          className={`${styles.filter} ${
            activeFilter === "all" ? styles.active : ""
          }`}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`${styles.filter} ${
            activeFilter === "active" ? styles.active : ""
          }`}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`${styles.filter} ${
            activeFilter === "completed" ? styles.active : ""
          }`}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>

      <button onClick={onClearCompleted} className={styles.clearButton}>
        Clear completed
      </button>
    </div>
  );
}
