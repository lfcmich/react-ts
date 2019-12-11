import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {

  console.log(process.env.TITLE)

  return <h1>Hello React Typescript!</h1>;
}
