const person = {
  name: "Malte",
  age: 23,
  location: {
    city: "Germany",
    temp: 3,
  },
};

const { name: personName = "Anonymous", age } = person;

const { city, temp: temperature } = person.location;

console.log(`${personName} is ${age}, its ${temperature}°C in ${city}`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);


//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// Skip item: with , ,
const [street, , state, zip] = address;

console.log(`${street}, ${state}, ${zip}`);