/* babel src/index.js --out-file=public/scripts/index.js --presets=env,react --watch */
/* live-server public */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: this.props.count,
    };
  }

  componentDidMount() {
    try {
      const countString = localStorage.getItem("count");
      const count = parseInt(countString);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleMinusOne() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  handleReset() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne} id="addButton">
          +1
        </button>
        <button onClick={this.handleMinusOne} id="subtractButton">
          -1
        </button>
        <button onClick={this.handleReset} id="resetButton">
          Reset
        </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

const appRoot = document.getElementById("app");
ReactDOM.render(<Counter count={5} />, appRoot);
