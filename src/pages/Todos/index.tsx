import React, { useCallback, useState } from "react";
import { useTodo } from "../../hooks/todo";

import { Container, Header, Form, Content, Todo } from "./styles";

const Todos: React.FC = () => {
  const { todos, addTodo, removeTodo } = useTodo();
  const [task, setTask] = useState("");

  const handleAddTodo = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addTodo({ task });
      setTask("");
    },
    [task, addTodo, setTask]
  );

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
