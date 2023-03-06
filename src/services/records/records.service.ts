// Initializes the `records` service on path `/records`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Records } from './records.class';
import createModel from '../../models/records.model';
import hooks from './records.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'records': Records & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/records', new Records(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('records');

  service.hooks(hooks);
}
