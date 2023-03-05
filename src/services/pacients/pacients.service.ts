// Initializes the `pacients` service on path `/pacients`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pacients } from './pacients.class';
import createModel from '../../models/pacients.model';
import hooks from './pacients.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pacients': Pacients & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pacients', new Pacients(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pacients');

  service.hooks(hooks);
}
