import React, { useCallback, useState } from "react";
import { useTodo } from "../../hooks/todo";

import { Container } from "./styles";

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
      <form onSubmit={handleAddTodo}>
        <input value={task} onChange={(event) => setTask(event.target.value)} />
        <button>create todo</button>
      </form>
      <main>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.task}</p>
            <button onClick={() => removeTodo(todo.id)}>remove</button>
          </div>
        ))}
      </main>
    </Container>
  );
};

export default Todos;
