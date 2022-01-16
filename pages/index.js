import { useState } from "react";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import Container from "../components/Container";
import Title from "../components/Ttitle";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const submit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Title>Todo App</Title>
      <Container>
        <TodoForm submit={submit} />
      </Container>
      <Container>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={`${todo.id}`}
              data={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}
