import React, { useCallback, useState } from "react";
import { v4 } from "uuid";
// import { Container } from './styles';

interface ITodo {
  value: string;
  id: string;
}

const Home: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTodos((oldTodos) => [...oldTodos, { id: v4(), value: text }]);
      setText("");
    },
    [setText, setTodos, text]
  );

  const removeTodo = useCallback((id: string) => {
    setTodos((oldTodos: ITodo[]) => oldTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="todo"
        />
        <button data-testid="submitButton">Criar todo</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.value}</p>
            <button
              onClick={() => removeTodo(todo.id)}
              data-testid={`button-remove-${todo.value}`}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
