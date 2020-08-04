const domUpdates = require('../src/domUpdates');
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;

chai.use(spies);

describe('domUpdates', function() {
  let user;
  beforeEach(() => {
    user = {"id": 1, "name": "Leatha Ullrich"};
    global.document = {};
    chai.spy.on(document, ['querySelector'], () => {
      return { innerText: '' }
      });
  });
  afterEach(function() {
    chai.spy.restore(domUpdates)
  });

  it('Should modify the header', function() {
    domUpdates.displayFullHeader(user);

    expect(domUpdates.querySelector).to.have.been.called(1);
    expect(domUpdates.querySelector).to.have.been.called.with(".user-title");
  })
})