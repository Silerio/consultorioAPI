const getAssociations = (context:any) =>{
  const sequelize = context.app.get('sequelizeClient');
  const { 
    records,
  } = sequelize.models;

  context.params.sequelize = { 
    include: [
      {
        model: records,
      },
    ],
    raw:false,
  };
};

export default {
  before: {
    all: [],
    find: [getAssociations],
    get: [getAssociations],
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
