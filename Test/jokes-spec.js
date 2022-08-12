const { expect, assert } = require("chai");
const jokesApi = require("../api/random-api");
const should = require("chai").should();

describe("Random jokes", async function () {
  it("Testing jokes", async function () {
    const joke1 = await jokesApi.getRandomJoke();
    const joke2 = await jokesApi.getRandomJoke();

    // Verify that jokes are not the same
    expect(joke1.data.value).not.to.equal(joke2.data.value);
    assert.notEqual(joke1.data.value, joke2.data.value);

    // Verify 200 status code received
    expect(joke1.status).to.equal(200);
    assert.equal(joke1.status, 200);

    // Verify URL contains expected base
    expect(joke2.data.url).that.includes("https://api.chucknorris.io/jokes");
    assert.include(joke2.data.url, "https://api.chucknorris.io/jokes");
  });
});
