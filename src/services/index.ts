import { Application } from '../declarations';
import users from './users/users.service';
import pacients from './pacients/pacients.service';
import records from './records/records.service';
import consultations from './consultations/consultations.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(pacients);
  app.configure(consultations);
  app.configure(records);
}
