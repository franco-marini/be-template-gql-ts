import Task from '../models/task';

const createTask = async (title: string) => {
  const NewTask = new Task({
    title
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

const updateTask = async (id: string, title: string) =>
  Task.findOneAndUpdate(
    { _id: id },
    {
      title
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
