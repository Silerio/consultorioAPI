// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import moment from "moment";
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';
import { CONSULTATIONS_STATUS } from '../enums/CONSULTATIONS_STATUS';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const consultations = sequelizeClient.define('consultations', {
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'N/A',
    },
    scheduledDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(CONSULTATIONS_STATUS)),
      allowNull: false,
      defaultValue: CONSULTATIONS_STATUS.SCHEDULED,
    },
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (consultations as any).associate = function (models: any): void {
    const {
      pacients,
      records,
    } = models;

    consultations.belongsTo(pacients);
    consultations.hasOne(records);
  };

  return consultations;
}
