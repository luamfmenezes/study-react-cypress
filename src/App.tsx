import React from "react";
import { TodoProvider } from "./hooks/todo";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <TodoProvider>
      <Routes />
      <GlobalStyle />
    </TodoProvider>
  );
}

export default App;
