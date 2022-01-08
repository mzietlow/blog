/* babel src/index.js --out-file=public/scripts/index.js --presets=env,react --watch */
/* live-server public */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular =
      this.handleDeleteOptionSingular.bind(this);
    this.state = {
      options: ["a", "b", "c"]
    };
  }

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
    if (
      prevState.options.length !== this.state.options.length
    ) {
      const optionsJson = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionsJson);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
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
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "someDefault",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOptionSingular={props.handleDeleteOptionSingular}
        />
      ))}
    </div>
  );
};

const Option = (props) => (
  <div>
    {props.optionText}{" "}
    <button onClick={(e) => props.handleDeleteOptionSingular(props.optionText)}>
      x
    </button>
  </div>
);

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(
  <IndecisionApp />,
  document.getElementById("app")
);
