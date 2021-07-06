var HelloWorld = artifacts.require("./HelloWorld.sol");
const initMessage = "Hello world!";

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, initMessage);
};
