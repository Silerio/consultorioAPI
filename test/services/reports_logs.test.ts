import assert from 'assert';
import app from '../../src/app';

describe('\'reports_logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('reports-logs');

    assert.ok(service, 'Registered the service');
  });
});
