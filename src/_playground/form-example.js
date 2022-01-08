/* babel src/index.js --out-file=public/scripts/index.js --presets=env,react --watch */
/* live-server public */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "mzietlow/blog",
  subtitle: "This is some Info",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const inputValue = e.target.elements.option.value.trim();

  if (inputValue) {
    app.options.push(inputValue);
    e.target.elements.option.value = "";
    render();
  }
};

const resetOnClick = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  if (app.options) {
    const randomNum = Math.floor(Math.random() * app.options.length);
    decisionValue = app.options[randomNum];
    render();
  }
};

let decisionValue = '';

const appRoot = document.getElementById("app");
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
      <p>Decision: {decisionValue}</p>
      <ul>
      {
        app.options.map(number => <li key={number}>Number: {number}</li>)
      }
      </ul>
      <br/>
      <button onClick={resetOnClick}>Reset options</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
