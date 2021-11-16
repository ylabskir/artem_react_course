import React, { useState, useEffect } from "react";
import "./App.css";
import {
  //getAllTodos,
  todosActions,
  TodosContainer,
} from "@containers/";
import { useSelector, useDispatch } from "react-redux";
import { createThunkActions } from "./utils/actionThunkCreator";
import { fetchTodosRequestService } from "./containers/Todos/store/services";
interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //  dispatch(todosActions.FETCH_TODOS.REQUEST({}));
    // dispatch(getAllTodos()) // my old wayyyy
    dispatch(todosActions.FETCH_TODOS.REQUEST(fetchTodosRequestService));
  }, [dispatch]);

  return (
    <div className="App">
      <TodosContainer />
    </div>
  );
}

export default App;
