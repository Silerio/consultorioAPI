import pagination from '../../hooks/pagination';

const getAssociations = (context:any) =>{
  const sequelize = context.app.get('sequelizeClient');
  const { 
    consultations,
  } = sequelize.models;

  context.params.sequelize = { 
    include: [
      {
        model: consultations,
      },
    ],
    raw:false,
  };
};

export default {
  before: {
    all: [],
    find: [getAssociations, pagination],
    get: [getAssociations, pagination],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
