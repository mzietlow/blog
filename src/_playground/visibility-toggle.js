/* babel src/index.js --out-file=public/scripts/index.js --presets=env,react --watch */
/* live-server public */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

// JSX - JavaScript XML
const appRoot = document.getElementById("app");

const buttonShowText = "Show details";
const buttonHideText = "Hide details";

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleVisibility}>
          {this.isVisible ? "Hide details" : "Show details"}
        </button>
        <p hidden={this.isVisible}>
          Hey! These are some details you can now see!
        </p>
      </div>
    );
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      !prevState.isVisible
    });
  }
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <VisibilityToggle />
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
