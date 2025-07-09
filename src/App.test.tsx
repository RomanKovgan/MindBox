import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App integration", () => {
  it("adds and completes todo", async () => {
    render(<App />);

    const form = screen.getByTestId("todo-form");
    const input = screen.getByPlaceholderText("What needs to be done?");

    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.submit(form);

    expect(await screen.findByText("New task")).toBeInTheDocument();
    expect(screen.getByText("1 item left")).toBeInTheDocument();

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    expect(screen.getByText("New task")).toHaveClass("completed");
  });
});
