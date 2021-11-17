import React from "react";
import { RequireAuthHOC } from "../../../router/requireAuth";

interface IMainProps {
  children: any;
}
const Main = ({ children }: IMainProps) => <>{children}</>;

export default RequireAuthHOC(Main);
