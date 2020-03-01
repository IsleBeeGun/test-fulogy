import React from "react";
import "./App.scss";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { InfoMain } from "../InfoMain/InfoMain";
import { Navigator } from "../Navigator/Navigator";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "variant",
      variant: "angular",
      color: "warm",
      info: "",
      isInfoVisible: false
    };
    this.changeOption = this.changeOption.bind(this);
    this.changeSetting = this.changeSetting.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }
  changeOption(valueFromEvent) {
    this.setState({ option: valueFromEvent });
  }
  changeSetting(valueFromEvent, settingToChange) {
    this.setState({ [settingToChange]: valueFromEvent });
  }
  toggleInfo() {
    this.setState({ isInfoVisible: !this.state.isInfoVisible });
  }
  render() {
    let option = this.props.options.find(option => {
      return option.value === this.state.option;
    });
    console.log(this.state);
    return (
      <div className="app-container">
        <Header />
        {this.state.isInfoVisible ? (
          <InfoMain toggleInfo={this.toggleInfo} info={this.state.info} />
        ) : (
          <Main
            changeSetting={this.changeSetting}
            toggleInfo={this.toggleInfo}
            images={this.props.images[this.state.variant][this.state.color]}
            option={option}
            superstate={this.state}
          />
        )}
        <Navigator
          changeOption={this.changeOption}
          option={this.state.option}
          options={this.props.options}
        />
      </div>
    );
  }
}
