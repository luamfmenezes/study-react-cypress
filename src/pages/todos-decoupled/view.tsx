import React from "react";
import { ITodo } from "../../hooks/todo";

import { Container, Content, Form, Header, Todo } from "./styles";

interface IProps {
  task: string[];
  todos: ITodo[];
  setTask: (task: string) => void;
  removeTodo: (todoId: string) => void;
  handleAddTodo: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Todos: React.FC<IProps> = ({
  handleAddTodo,
  task,
  todos,
  setTask,
  removeTodo,
}) => {
  return (
    <Container>
      <Header>
        <h1>React todo List</h1>
      </Header>
      <Form onSubmit={handleAddTodo}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          data-cy="input-todo"
        />
        <button data-cy="button-todo">create todo</button>
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
      </Content>
    </Container>
  );
};

export default Todos;
