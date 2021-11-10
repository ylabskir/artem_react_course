//import { getTodos } from "@containers/*";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../index";

interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

const Todos = () => {
  const data = useSelector(getTodos());
  console.log(data);

  useEffect(() => {}, []);

  return null;
};

export default Todos;
