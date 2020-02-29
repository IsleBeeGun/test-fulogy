import React from "react";
import "./App.scss";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Navigator } from "../Navigator/Navigator";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { option: "variant" };
    this.changeOption = this.changeOption.bind(this);
  }
  changeOption(event) {
    this.setState({ option: event });
  }
  render() {
    return (
      <div className="app-container">
        <Header />
        <Main
          images={this.props.images}
          option={this.state.option}
          options={this.props.options}
        />
        <Navigator
          changeOption={this.changeOption}
          option={this.state.option}
          options={this.props.options}
        />
      </div>
    );
  }
}
