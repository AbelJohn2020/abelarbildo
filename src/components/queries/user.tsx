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