import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { TodoProvider, useTodo } from "./todo";
import AxiosMockAdapter from "axios-mock-adapter";
import api from "../services/api";
import { act } from "react-dom/test-utils";

const apiMock = new AxiosMockAdapter(api);

describe("todo Hook", () => {
  beforeEach(() => {
    apiMock.onGet("/todos").replyOnce(200, [{ id: 1, task: "task-fake" }]);
  });

  it("should fetch the todos from api", async () => {
    const { result, waitForValueToChange } = renderHook(() => useTodo(), {
      wrapper: TodoProvider,
    });

    await waitForValueToChange(() => result.current.todos);

    expect(result.current.todos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          task: "task-fake",
        }),
      ])
    );
  });

  it("should be able to add new todos", async () => {
    apiMock.onPost("/todos").replyOnce(200, [{ id: 1, task: "task-fake" }]);
    let spy = jest.spyOn(api, "post");

    const { result, waitForValueToChange } = renderHook(() => useTodo(), {
      wrapper: TodoProvider,
    });

    act(() => {
      result.current.addTodo({ task: "new-todo" });
    });

    await waitForValueToChange(() => result.current.todos);

    expect(spy).toHaveBeenCalledWith("/todos", { task: "new-todo" });
  });

  it("should be able to remove a todo", async () => {
    apiMock.onDelete("/todos/15").replyOnce(200);

    let spy = jest.spyOn(api, "delete");

    const { result, waitForValueToChange } = renderHook(() => useTodo(), {
      wrapper: TodoProvider,
    });

    act(() => {
      result.current.removeTodo("15");
    });

    await waitForValueToChange(() => result.current.todos);

    expect(spy).toHaveBeenCalledWith("/todos/15");
  });
});
