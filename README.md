# Week-11-API-Automation

•	 CREATE a new folder

•	 OPEN it up in the VSC

•	 VERIFY if node.js already installed: node -v, if not, install node.js https://nodejs.org/en/download/package-manager/#macos

•	 INITIALIZE new application: npm init, verify that package.json was installed in the folder

•	 INSTALL Axios: npm i axios

•	 INSTALL Chai library: npm i chai

•	 INSTALL Mocha run environment: npm i mocha

•	 CREATE a new folder ‘test’, inside of it create a new file for testing: jokes-spec.js. Create a testing framework inside

•	 USE https://github.com/chucknorris-io/chuck-api to test API response

•	 USE axios.get('https://api.chucknorris.io/jokes/random')  to send it through Axios

•	 In the package.json SPECIFY that we’re going to use Mocha to run tests: “test”: “mocha”

•	 USE npm test command in the terminal to run the tests

•	 CREATE 3 tests to test API: “Should get a new joke upon each request” , “Should get 200 status code response” and “Should get response with base of the url” 
  

BASIC FUNCTION:
  
const {expect, assert} = require('chai');
  
describe("test suite", async function () {
  it("test case", async function () {
  const ... = await ...;
  });
});


•	 MAKE the tests FAIL intentionally

•	 CREATE a new folder to host all helper methods in it. Ex: random-api.js

•	 CREATE helper methods and use in the jokes-spec.js

•	 IMPORT helper methods and use in the jokes-spec.js, const … = require(‘../’);

•	 REPLACE duplicating lines of code with helper’s name.

•	 ‘await’ for all ‘async’ helpers.

•	 ENJOY
