// Initializes the `consultations` service on path `/consultations`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Consultations } from './consultations.class';
import createModel from '../../models/consultations.model';
import hooks from './consultations.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'consultations': Consultations & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/consultations', new Consultations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('consultations');

  service.hooks(hooks);
}
