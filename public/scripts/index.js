'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'mzietlow/blog'
  ),
  React.createElement(
    'p',
    null,
    'This is some Info'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

// Create a templateTwo var JSX expression

var userName = 'Malte Zietlow';
var userAge = 23;
var userLocation = 'Hamburg';
var userEducation = "B.Sc. Applied Computer Science";

var user = {
  name: userName,
  age: userAge,
  location: userLocation,
  education: userEducation
};

function getLocation(location) {
  if (location) {
    return location;
  }
  return 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  ),
  React.createElement(
    'p',
    null,
    'Education: ',
    user.education
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
