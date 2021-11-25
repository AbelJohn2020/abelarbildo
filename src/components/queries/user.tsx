import { gql } from "@apollo/client";


export const USER = gql`
    query {
        profile {
            avatar,
            fullName,
            id,
        }
    }
`;

// const GET_STATUS = gql`
// query getTasks {
//   query {
//     tasks(input: {}) {
//       status
//     }
//   }
// }

// const GET_DETAIL = gql`
//   query getDetail($id: ID!) {
//     person(id: $id) {
//       name
//       eyeColor
//       hairColor
//       skinColor
//       birthYear
//       vehicleConnection {
//         vehicles {
//           name
//         }
//       }
//     }
//   }
// `;

// let [getDetail, { loading, error, data }] = useLazyQuery(GET_DETAIL, {
//     variables: { id: selected },
//   });