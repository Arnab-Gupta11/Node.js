const EventEmitter = require("events");
const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on("bellRing", (period) => {
  console.log(`we need to run because ${period}`);
});
//raise an event
//pass parameter
emitter.emit("bellRing", "Second period ended");
