import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Home from "./index";

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe("Home page", () => {
  beforeEach(() => {});

  it("should be able to create a new todo", async () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<Home />);

    const inputTodo = getByPlaceholderText("todo");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputTodo, { target: { value: "new-todo" } });

    fireEvent.click(submitButton);

    const todo = getByText("new-todo");

    await waitFor(() => {
      expect(todo).toBeTruthy();
    });
  });
  it("should be able to remove a todo", async () => {
    const renderedHome = render(<Home />);

    const { getByTestId, getByPlaceholderText, queryByTestId } = renderedHome;

    const inputTodo = getByPlaceholderText("todo");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputTodo, { target: { value: "created-todo" } });

    fireEvent.click(submitButton);

    const removeTodoButton = getByTestId("button-remove-created-todo");

    fireEvent.click(removeTodoButton);

    const todo = queryByTestId("created-todo");

    await waitFor(() => {
      expect(todo).toBeNull();
    });
  });
});
