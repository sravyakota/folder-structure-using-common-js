const peoplesName = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (list) => {
  return getFirstNames(list);
};
module.exports = getPeopleInCity;
