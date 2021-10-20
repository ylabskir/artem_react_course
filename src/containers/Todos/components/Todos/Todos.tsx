import React, { useState } from "react";

interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[] | undefined>();

  return (
    <>
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
      <h2 className="test">aaaaaaa</h2>
    </>
  );
};

export default Todos;
