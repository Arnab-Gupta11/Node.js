const EventEmitter = require("events");
const { setTimeout } = require("timers/promises");
const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on("bellRing", ({ period, text }) => {
  console.log(`we need to run because ${period} ${text}`);
});
//raise an event
//pass parameter

// setTimeout(() => {
emitter.emit("bellRing", {
  period: "second",
  text: "period ended",
});
// }, 1000);
