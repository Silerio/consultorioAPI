import assert from 'assert';
import app from '../../src/app';

describe('\'news\' service', () => {
  it('registered the service', () => {
    const service = app.service('news');

    assert.ok(service, 'Registered the service');
  });
});
