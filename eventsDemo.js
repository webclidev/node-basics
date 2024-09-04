import { EventEmitter } from "events";

const newEmitter = new EventEmitter();

function greet(name) {
  console.log(name);
}

// Register event listener
newEmitter.on("greet", greet);

// Emit event
newEmitter.emit("greet", "Om Namah Shivay");
