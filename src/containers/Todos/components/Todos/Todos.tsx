//import { getTodos } from "@containers/*";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../index";

const Todos = () => {
  const data = useSelector(getTodos());
  console.log(data);

  useEffect(() => {}, []);

  return null;
};

export default Todos;
