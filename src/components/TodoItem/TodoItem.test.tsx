import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const mockTodo = {
    id: 1,
    text: "Test task",
    completed: false,
  };

  it("renders task text", () => {
    render(<TodoItem todo={mockTodo} onToggle={vi.fn()} onDelete={vi.fn()} />);

    expect(screen.getByText("Test task")).toBeInTheDocument();
  });

  it("calls onToggle when clicked", () => {
    const mockToggle = vi.fn();
    render(
      <TodoItem todo={mockTodo} onToggle={mockToggle} onDelete={vi.fn()} />
    );

    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});
