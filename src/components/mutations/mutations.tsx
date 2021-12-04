import { gql } from "@apollo/client";

// Maximilian Schwarzmüller

export const CREATE_TASK = gql`
  mutation createTask(
    $name: String!
    $pointEstimate: PointEstimate!
    $tags: [TaskTag!]!
    $status: Status!
    $date: DateTime!
  ) {
    createTask(
      input: {
        dueDate: $date
        name: $name
        pointEstimate: $pointEstimate
        status: $status
        tags: $tags
      }
    ) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(input: $updateTaskInput) {
      id
      name
      pointEstimate
      status
      tags
      dueDate
      position
      owner
      tags
      createdAt
    }
  }
`;
