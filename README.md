# Week-11-API-Automation

•	 INITIALIZE new application: npm init, verify that package.json was installed in the folder

•	 INSTALL Axios: npm i axios

•	 INSTALL Chai library: npm i chai

•	 INSTALL Mocha run environment: npm i mocha

•	 CREATE a new folder ‘test’, inside of it create a new file for testing: jokes-spec.js. Create a testing framework inside

•	 USE https://github.com/chucknorris-io/chuck-api to test API response

•	 USE axios.get('https://api.chucknorris.io/jokes/random')  to send it through Axios

•	 CREATE 3 tests to test API: “Should get a new joke upon each request” , “Should get 200 status code response” and “Should get response with base of the url” 
  

BASIC FUNCTION:
  
const {expect, assert} = require('chai');
  
describe("test suite", async function () {
  it("test case", async function () {
  const ... = await ...;
  });
});