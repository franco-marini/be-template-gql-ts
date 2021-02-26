import { gql } from 'apollo-server-express';

export const taskDefs = gql`
  type Task {
    id: String
    title: String
    deleted: Boolean
  }

  input TaskInput {
    id: String!
    title: String!
  }

  type Query {
    tasks(filter: String): [Task]
  }

  type Mutation {
    createTask(title: String!): Task
    updateTask(input: TaskInput!): Task
    deleteTask(id: String!): Task
  }
`;
