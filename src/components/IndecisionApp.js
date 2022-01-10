import React from "react";

import AddOption from "./AddOption.js";
import Header from "./Header.js";
import Action from "./Action.js";
import Options from "./Options.js";
import OptionModal from "./OptionModal.js";

export default class IndecisionApp extends React.Component {
  state = {
    options: ["a", "b", "c"],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(() => ({ selectedOption }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const optionsJson = localStorage.getItem("options");
      const options = JSON.parse(optionsJson);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const optionsJson = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionsJson);
    }
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOptionSingular={this.handleDeleteOptionSingular}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
