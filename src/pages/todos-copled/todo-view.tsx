import React from "react";
import { ITodo } from "../../hooks/todo";

import { Container, Content, Form, Header, Todo } from "./todo-styles";

export interface ITodoViewProps {
  task: string;
  todos: ITodo[];
  setTask: (task: string) => void;
  removeTodo: (todoId: string) => void;
  handleAddTodo: () => void;
}

export const TodoView: React.FC<ITodoViewProps> = ({
  task,
  todos,
  setTask,
  removeTodo,
  handleAddTodo,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo();
  };

  return (
    <Container>
      <Header>
        <h1>React todo List</h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          data-cy="input-todo"
          placeholder="new todo"
        />
        <button data-cy="button-todo" data-testid="button-create-todo">
          create todo
        </button>
      </Form>
      <Content data-cy="container-todos">
        {todos.map((todo) => (
          <Todo key={todo.id}>
            <p>{todo.task}</p>
            <button onClick={() => removeTodo(todo.id)} data-cy="button-remove">
              remove
            </button>
          </Todo>
        ))}
        {todos.length === 0 && <p>Empty todo list</p>}
      </Content>
    </Container>
  );
};
