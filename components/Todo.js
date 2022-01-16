import { useState } from "react";
import Card from "./Card";
import Container from "./Container";
import Button from "./Button";
import P from "./P";

const Todo = ({ data, todos, setTodos }) => {
  const [todo, setTodo] = useState(data);

  const deleteTodo = () => {
    setTodo({
      todo: todo.todo,
      id: todo.id,
      completed: !todo.completed,
      deleted: true,
    });
    const newTodos = todos.filter((e) => e.id !== todo.id);

    setTodos(newTodos);
  };

  if (todo.deleted) {
    return null;
  }

  return (
    <Container>
      <Card
        completed={todo.completed}
        onClick={() =>
          setTodo({
            todo: todo.todo,
            id: todo.id,
            completed: !todo.completed,
            deleted: false,
          })
        }
      >
        <P completed={todo.completed}>
          {todo.todo}
        </P >
        <Button onClick={deleteTodo}>Eliminar</Button>
      </Card>
    </Container>
  );
};

export default Todo;
