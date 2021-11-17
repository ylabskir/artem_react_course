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
// @ts-ignore
import { Switch, Redirect } from "react-router";
import { publicRouter, privateRouter, routerAssessor, RequireAuthHOC } from "./router";
import { Main } from "./shared/components";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   //  dispatch(todosActions.FETCH_TODOS.REQUEST({}));
  //   // dispatch(getAllTodos()) // my old wayyyy
  //   dispatch(todosActions.FETCH_TODOS.REQUEST(fetchTodosRequestService));
  // }, [dispatch]);

  return (
    <div>
      <Switch>
        {publicRouter.map((route) => routerAssessor(null, route))}
        <Main>{privateRouter("ADMIN").map((route) => routerAssessor(null, route))}</Main>
        <Redirect to="/login" />
      </Switch>
      {/* <TodosContainer /> */}
    </div>
  );
}

export default App;
