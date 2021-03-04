import React, { useCallback, useState } from "react";
import { useTodo } from "../../hooks/todo";
import { TodoView } from "./todo-view";

export const Todos: React.FC = () => {
  const { todos, addTodo, removeTodo } = useTodo();

  const [task, setTask] = useState("");

  const handleAddTodo = useCallback(() => {
    addTodo({ task });
    setTask("");
  }, [task, addTodo, setTask]);

  const todoViewProps = {
    todos,
    task,
    removeTodo,
    setTask,
    handleAddTodo,
  };

  return <TodoView data-testid="todo-view" {...todoViewProps} />;
};
