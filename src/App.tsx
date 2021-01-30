import React from "react";
import { TodoProvider } from "./hooks/todo";
import Routes from "./routes";

function App() {
  return (
    <TodoProvider>
      <Routes />
    </TodoProvider>
  );
}

export default App;
