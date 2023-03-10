// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const pacients = sequelizeClient.define('pacients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ahf: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: true
    },
    app: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: true
    },
    apnp: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: true
    },
    ago: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (pacients as any).associate = function (models: any): void {
    const {
      consultations,
    } = models;

    pacients.hasMany(consultations);
  };

  return pacients;
}
