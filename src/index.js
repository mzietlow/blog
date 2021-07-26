console.log("App.js is running!")

// JSX - JavaScript XML
var template = (
  <div>
    <h1>mzietlow/blog</h1>
    <p>This is some Info</p>
    <ul>
      <li>Item One</li>
      <li>Item Two</li>
    </ul>
  </div>
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

var templateTwo =
(
  <div>
    <h1>{user.name + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
    <p>Education: {user.education}</p>
  </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);