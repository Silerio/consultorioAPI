// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const records = sequelizeClient.define('records', {
    medicalNote: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: false
    },
    physicalExploration: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: false
    },
    diagnosis: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: false
    },
    treatment: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: false
    },
    /*
      laboratoryExams: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imagingStudies: {
        type: DataTypes.STRING,
        allowNull: false
      },
    */
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (records as any).associate = function (models: any): void {
    const {
      consultations
    } = models;

    records.belongsTo(consultations);
  };

  return records;
}
