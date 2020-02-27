import React from "react";
import "./Main.scss";
import { Preview } from "../Preview/Preview";
import { Details } from "../Details/Details";
import { Selected } from "../Selected/Selected";

export class Main extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Preview />
        <div className="details-and-selected-container">
          <Details />
          <Selected />
        </div>
      </main>
    );
  }
}
