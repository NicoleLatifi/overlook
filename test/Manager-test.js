import { expect } from 'chai'
import Manager from '../src/Manager';

describe('Manager', function() {
  it('should have manager as a default username', function() {
    const manager = new Manager();

    expect(manager.username).to.equal("manager");
  })
})