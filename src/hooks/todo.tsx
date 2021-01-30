import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 } from "uuid";
import api from "../services/api";

interface ITodo {
  task: string;
  id: string;
}

interface ICreateTodo {
  task: string;
}

interface ITodoContext {
  todos: ITodo[];
  loading: boolean;
  addTodo: (data: ICreateTodo) => void;
  removeTodo: (id: string) => void;
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext);

const TodoProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = useCallback(async (todo) => {
    const response = await api.post("/todos", todo);
    setTodos((oldTodos) => [...oldTodos, response.data]);
  }, []);

  const removeTodo = useCallback(async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    const featchTodos = async () => {
      setLoading(true);
      const response = await api.get("/todos");
      setTodos(response.data);
      setLoading(false);
    };
    featchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, loading }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = (): ITodoContext => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "You should execute this hook only inside of one react component"
    );
  }

  return context;
};

export { useTodo, TodoProvider };
