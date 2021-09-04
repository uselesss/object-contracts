const rent = artifacts.require("RentContract");
const landlord = "0xb94bBdcC1180933AdaC5f969B43b5C65b6C21659";

module.exports = function (deployer) {
  deployer.deploy(rent, landlord);
};
