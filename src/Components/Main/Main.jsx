import React from "react";
import "./Main.scss";
import {Preview} from "../Preview/Preview";
import {Details} from "../Details/Details";
import {Selected} from "../Selected/Selected";

export class Main extends React.Component {
  render() {
    return (
      <main>
        <Preview />
        <Details />
        <Selected />
      </main>
    )
  }
}
