import useForm from "../hooks/useForm";
import Input from "./Input";

const TodoForm = ({ submit }) => {
  const [form, counter, handleChange, resetForm, setCounter] = useForm({
    todo: "",
    completed: false,
    deleted: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(form);
    resetForm();
    setCounter(counter + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Todo"
        placeholder="Añade un todo"
        name="todo"
        value={form.todo}
        onChange={handleChange}
        autoComplete="off"
      />
    </form>
  );
};

export default TodoForm;
