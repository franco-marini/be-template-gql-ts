import Task from '../models/task';

const createTask = async ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  const NewTask = new Task({
    title,
    description
  });
  const savedTask = await NewTask.save();
  return savedTask;
};

const getTasks = async (filter: string = '') =>
  Task.find({
    $and: [
      {
        $or: [{ title: { $regex: filter, $options: 'i' } }]
      },
      {
        deleted: false
      }
    ]
  });

const updateTask = async ({
  id,
  title,
  description
}: {
  id: string;
  title: string;
  description: string;
}) =>
  Task.findOneAndUpdate(
    { _id: id },
    {
      title,
      description
    },
    { new: true }
  );

const deleteTask = async (id: string) =>
  Task.findOneAndUpdate(
    {
      _id: id,
      deleted: false
    },
    { deleted: true },
    { new: true }
  );

export default {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};
