import React, { useState, useEffect } from "react";
import "./App.css";
import { todosActions, TodosContainer } from "@containers/";
import { useSelector, useDispatch } from "react-redux";
interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosActions.FETCH_TODOS.REQUEST({}));
  }, [dispatch]);

  // const [todos] = useState<ITodo[]>([
  //   {
  //     id: 1,
  //     text: "Test 001",
  //     createAt: new Date(),
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     text: "Test 002",
  //     createAt: new Date(),
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     text: "Test 003",
  //     createAt: new Date(),
  //     completed: false,
  //   },
  // ]);
  return (
    <div className="App">
      <TodosContainer />
    </div>
  );
}

export default App;
