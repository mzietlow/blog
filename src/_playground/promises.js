const promise = new Promise((resolve, reject) => {
  // resolve("This is my resolved data"); // resolve / reject can be called only once, subsequent calls are ignored
  reject("something went wrong");
});

console.log("Before");

promise
  .then((data) => {
    setTimeout(() => console.log(data), 2500);
  })
  .catch((error) => {
    console.log(error);
  });

// Alternative for then(...).catch(...)
promise.then(
  (data) => {
    setTimeout(() => console.log(data), 2500);
  },
  (error) => {
    console.log(error);
  }
);

console.log("After");

// Promise Chaining
promise
  .then((data) => {
    setTimeout(() => console.log(data), 2500);
    return "Some Value";
  })
  .then(() => {
    setTimeout((someValue) => console.log("Does this run?", someValue), 1000);
  })
  .catch((error) => {
    console.log(error);
  });
