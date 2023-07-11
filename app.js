// TODO: Enable strict mode

"use strict";

// TODO: Fix the following parameter list

function parseToJSON(data) {
    // TODO: Add a try/catch block to
  try{
      // attempt to convert 'data' to JSON
    return JSON.parse(data);
  } catch(error) {
    // TODO: if an exception is raised
    // print the error to the console
    // and return null
    console.error(error);
    return null;
  }
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));

// CONSOLE:
// null
// { success: true }