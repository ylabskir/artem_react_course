import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, getFilterSettings, todosActions } from "../../index";

const Todos = () => {
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState("");

  const todos = useSelector(getTodos());
  const filterSettings = useSelector(getFilterSettings());
  console.log(filterSettings);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearchStr(value);
  };

  // const searchHandler = () => {
  //   dispatch(
  //     todosActions.TODOS_FILTER.REQUEST({ ...filterSettings, search: searchStr }, () => {
  //       dispatch(todosActions.FETCH_TODOS.REQUEST({}));
  //     }),
  //   );
  // };

  return (
    <div>
      <input name="search" value={searchStr} onChange={handleSearch} />
      {/* <button onClick={searchHandler}>Search</button> */}
      {todos?.map(({ title, id }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
};

export default Todos;
