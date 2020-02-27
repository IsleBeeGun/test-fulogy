import React from "react";
import "./App.scss";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Navigator} from "../Navigator/Navigator";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Navigator />
      </div>
    )
  }
}
