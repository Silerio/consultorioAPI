import { Application } from '../declarations';
import users from './users/users.service';
import news from './news/news.service';
import reports from './reports/reports.service';
import reportsLogs from './reports_logs/reports_logs.service';
import contracts from './contracts/contracts.service';
import pacients from './pacients/pacients.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(news);
  app.configure(reports);
  app.configure(reportsLogs);
  app.configure(contracts);
  app.configure(pacients);
}
