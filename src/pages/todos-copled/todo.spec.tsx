import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Todos } from "./todo";
import { ITodoContext, useTodo } from "../../hooks/todo";

jest.mock("../../hooks/todo");

const mockedUseTodo = useTodo as jest.Mock<ITodoContext>;

const makeFakeTodoUse = (data?: any) => ({
  todos: [
    {
      id: "1",
      task: "todo-one",
    },
    {
      id: "2",
      task: "todo-two",
    },
  ],
  addTodo: jest.fn(),
  removeTodo: jest.fn(),
  ...useTodo,
  ...data,
});

describe("Todo page", () => {
  it("should render todos", async () => {
    mockedUseTodo.mockImplementation(() => makeFakeTodoUse());
    const { getByText } = render(<Todos />);

    const todo1 = getByText("todo-one");
    const todo2 = getByText("todo-two");

    await waitFor(() => {
      expect(todo1).toBeTruthy();
      expect(todo2).toBeTruthy();
    });
  });

  it("should render an empty todo List with todos", async () => {
    mockedUseTodo.mockImplementation(() => makeFakeTodoUse({ todos: [] }));
    const { getByText } = render(<Todos />);

    const emptyTodoText = getByText("Empty todo list");

    await waitFor(() => {
      expect(emptyTodoText).toBeTruthy();
    });
  });

  it("should call addTodo with valid parans when button is clicked", async () => {
    const mockAddTodo = jest.fn();

    mockedUseTodo.mockImplementation(() =>
      makeFakeTodoUse({ addTodo: mockAddTodo })
    );

    const { getByPlaceholderText, getByTestId } = render(<Todos />);

    const inputText = getByPlaceholderText("new todo");
    const addButton = getByTestId("button-create-todo");

    fireEvent.change(inputText, { target: { value: "new-todo" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(mockAddTodo).toHaveBeenCalled();
    });
  });
});
