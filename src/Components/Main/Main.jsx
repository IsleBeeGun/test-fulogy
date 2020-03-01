import React from "react";
import "./Main.scss";
import { Preview } from "../Preview/Preview";
import { Details } from "../Details/Details";
import { Selected } from "../Selected/Selected";

export class Main extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Preview images={this.props.images} />
        <div className="details-and-selected-container">
          <Details />
          <Selected
            changeSetting={this.props.changeSetting}
            toggleInfo={this.props.toggleInfo}
            option={this.props.option}
            options={this.props.options}
            superstate={this.props.superstate}
          />
        </div>
      </main>
    );
  }
}
