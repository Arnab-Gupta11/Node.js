const getName = () => {
  return "Arnab Gupta";
};
const getAge = () => {
  return 23;
};
const cgpa = 3.4;

// exports.name = getName;
// exports.age = getAge;
// exports.cgpa = cgpa;

module.exports = {
  getAge,
  getName,
  cgpa,
};
