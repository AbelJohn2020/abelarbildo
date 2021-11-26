import { gql } from "@apollo/client";


export const USER = gql`
  query getUser {
    profile {
      avatar
      fullName
      email
      type
      createdAt
      updatedAt
    }
  }
`;

export const TASKS = gql`
  query getTasks {
    tasks(input: {}) {
      id
      createdAt
      dueDate
      name
      owner {
        avatar,
        createdAt,
        email,
        fullName,
        id,
        type,
        updatedAt,
      }
      pointEstimate
      position
      status
      tags
    }
  }
`