import tasks from '../../controllers/task';

export const taskResolvers = {
  Query: {
    tasks: async (_: any, { filter }: { filter: string }) =>
      tasks.getTasks(filter)
  },
  Mutation: {
    createTask: async (_: any, { title }: { title: string }) =>
      tasks.createTask(title),
    updateTask: async (
      _: any,
      { input: { id, title } }: { input: { id: string; title: string } }
    ) => tasks.updateTask(id, title),
    deleteTask: async (_: any, { id }: { id: string }) => tasks.deleteTask(id)
  }
};
