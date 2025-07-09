import { type FormEvent, useState } from "react";
import styles from "./TodoForm.module.scss";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      data-testid="todo-form"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
}
