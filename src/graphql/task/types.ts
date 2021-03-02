import { gql } from 'apollo-server-express';

export const taskDefs = gql`
  type Task {
    id: String
    title: String
    description: String
    deleted: Boolean
  }

  input TaskInputCreate {
    description: String!
    title: String!
  }

  input TaskInputUpdate {
    id: String!
    description: String!
    title: String!
  }

  type Query {
    tasks(filter: String): [Task]
  }

  type Mutation {
    createTask(input: TaskInputCreate!): Task
    updateTask(input: TaskInputUpdate!): Task
    deleteTask(id: String!): Task
  }
`;
