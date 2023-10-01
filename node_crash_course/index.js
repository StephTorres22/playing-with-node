const Person = require("./person");
const Logger = require("./logger");

const johnDoe = new Person("John Doe", 32);

johnDoe.greeting();

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`Called Listener:`, data);
});

logger.log("Hello World")
