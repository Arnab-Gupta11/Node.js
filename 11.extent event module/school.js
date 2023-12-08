const EventEmitter = require("events");

class school extends EventEmitter {
  stardPeriod() {
    console.log("Class starded");

    //raise an event
    //raise event while bell rings
    this.emit("bellRing", {
      period: "second",
      text: "period ended",
    });
  }
}
module.exports = school;
