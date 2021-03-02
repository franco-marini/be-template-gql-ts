import { Schema, Document, model } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  deleted: boolean;
}

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false
  }
});

export default model<Task>('Task', TaskSchema);
