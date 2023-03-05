import { Request, Response, NextFunction } from 'express';
import app from '../app';
import usersData from '../helpers/populateDate/users';
import updateOrCreate from '../helpers/updateOrCreate';

const generateUsers = async () => {
  const sequelize = app.get('sequelizeClient');
  const { users } = sequelize.models;

  console.log('users populate...');

  await Promise.all(
    usersData.map(user => {
      return updateOrCreate(users, user, { id: user.id });
    }),
  );

  console.log('users populated successfully');
};

export const populate = async (req: Request, res: Response) => {
  try {
    console.log('App populate...');

    await generateUsers();

    res.json({
      data: 'App populated successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal server error',
      // @ts-ignore
      msg: error.message,
    });
  }
};
