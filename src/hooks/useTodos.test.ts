import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useTodos from "./useTodos";

describe("useTodos hook", () => {
  it("adds new todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("New task");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0]).toEqual({
      id: expect.any(Number),
      text: "New task",
      completed: false,
    });
  });

  it("toggles todo status", () => {
    const { result } = renderHook(() => useTodos());

    // Сначала добавляем задачу
    act(() => {
      result.current.addTodo("Task");
    });

    const todoId = result.current.todos[0].id;

    // Затем переключаем статус
    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });
});
