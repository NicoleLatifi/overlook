import { expect } from 'chai'
import Manager from '../src/Manager';

describe('Manager', function() {
  it('should have manager as a default name', function() {
    const manager = new Manager();

    expect(manager.name).to.equal("manager");
  })
})