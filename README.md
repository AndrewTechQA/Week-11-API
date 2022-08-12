# Week-11-API-Automation


•	Create a new folder

•	Open it up in the VSC

•	Verify if node.js already installed: node -v, if not, install node.js https://nodejs.org/en/download/package-manager/#macos

•	Initialize new application: npm init, verify that package.json was installed in the folder

•	Install Axios: npm i axios

•	Install Chai library: npm i chai

•	Install Mocha run environment: npm i mocha

•	Create a new folder ‘test’, inside of it create a new file for testing: jokes-spec.js. Create a testing framework inside

•	Use https://github.com/chucknorris-io/chuck-api to test API response

•	Use axios.get('https://api.chucknorris.io/jokes/random')  to send it through Axios

•	In the package.json specify that we’re going to use Mocha to run tests: “test”: “mocha”

•	Use npm test command in the terminal to run the tests

•	Create 3 tests to test API: “Should get a new joke upon each request” , “Should get 200 status code response” and “Should get response with base of the url” 
  
Basic function:
  
const {expect, assert} = require('chai');
  
describe("test suite", async function () {
  it("test case", async function () {
  const ... = await ...;
  });
});

•	Make the tests fail intentionally

•	Create a new folder to host all helper methods in it. Ex: random-api.js

•	Create helper methods and use in the jokes-spec.js

•	Import helper methods and use in the jokes-spec.js, const … = require(‘../’);

•	Replace duplicating lines of code with helper’s name.

•	‘await’ for all ‘async’ helpers.
