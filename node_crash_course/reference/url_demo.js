const url = require("url");

const myURL = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

//Serialised URL
console.log(myURL.href);
console.log(myURL.toString());

//Host/Root Domain
console.log(myURL.host);

//Host name
console.log(myURL.hostname);
//hostanme doesn't include a port

//Path name
console.log(myURL.pathname);

//Serialise query
console.log(myURL.search);
//returns params as string

console.log(myURL.searchParams);
//return obj, or map... of serialise query/ params

//Add a param
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);

//Loop through the params
myURL.searchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
