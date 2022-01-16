import { useState } from "react";

const useForm = (initial) => {
  const [form, setForm] = useState(initial);
  const [counter, setCounter] = useState(0);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
      ["id"]: counter,
    });
  };

  const resetForm = () => {
    setForm(initial);
  };

  return [form, counter, handleChange, resetForm, setCounter];
};

export default useForm;
