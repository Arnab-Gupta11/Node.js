const EventEmitter = require("events");
const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on("bellRing", () => {
  console.log(`we need to run`);
});
//raise an event
emitter.emit("bellRing");
