import React from "react";
import { Filters, Footer, Header, Todos } from "@containers/";

interface IComponentProps {
  children?: React.ReactNode;
}

const TodosContainer = (props: IComponentProps) => {
  return (
    <div>
      <Header />
      <Todos />
      <Filters />
      <Footer />
    </div>
  );
};

export default TodosContainer;
