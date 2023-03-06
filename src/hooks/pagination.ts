// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext, Query } from '@feathersjs/feathers';

interface PaginationQuery extends Query {
  $skip?: number;
  $limit?: number;
  $max?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (context: HookContext): HookContext => {

  const { query } = context.params;

  // manage exception: do not set a pagination
  if (!query?.$skip && !query?.$limit) {
    context.service.options.paginate = {};
    return context;
  }

  // default pagination
  context.service.options.paginate = {
    default: 10,
    max: 100,
  };
  if (query?.$skip) {
    context.service.options.paginate = {
      ...context.service.options.paginate,
      skip: query.$skip,
    };
  }
  if (query?.$limit) {
    context.service.options.paginate = {
      ...context.service.options.paginate,
      limit: query.$limit,
    };
  }

  return context;
};
