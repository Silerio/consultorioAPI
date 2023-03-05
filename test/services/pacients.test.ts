import assert from 'assert';
import app from '../../src/app';

describe('\'pacients\' service', () => {
  it('registered the service', () => {
    const service = app.service('pacients');

    assert.ok(service, 'Registered the service');
  });
});
