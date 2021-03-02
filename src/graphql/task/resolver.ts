import tasks from '../../controllers/task';

export const taskResolvers = {
  Query: {
    tasks: async (_: any, { filter }: { filter: string }) =>
      tasks.getTasks(filter)
  },
  Mutation: {
    createTask: async (
      _: any,
      {
        input: { title, description }
      }: { input: { title: string; description: string } }
    ) => tasks.createTask({ title, description }),
    updateTask: async (
      _: any,
      { input }: { input: { id: string; title: string; description: string } }
    ) => tasks.updateTask(input),
    deleteTask: async (_: any, { id }: { id: string }) => tasks.deleteTask(id)
  }
};
