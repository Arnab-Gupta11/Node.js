const School = require("./school");
const school = new School();

// register a listener for bellRing event
school.on("bellRing", ({ period, text }) => {
  console.log(`we need to run because ${period} ${text}`);
});

school.stardPeriod();
