// Reference: https://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function

function foo(...args) {
  // args is an Arrary type
  console.log(args);
  console.log(Array.isArray(args));
  //   You can pass this array as parameters to another function
  console.log(...args);
}

function bar(x, ...args) {
  console.log(x, args, ...args, arguments);
}

foo("a", "b", "c");

bar("a", "b", "c");
