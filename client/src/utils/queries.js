import { gql } from '@apollo/client';

export const QUERY_USERNAMES = gql`
  query getUsernames {
    usernames {
      _id
      username
    }
  }
`;
