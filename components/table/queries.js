import { gql } from "@apollo/client";

export const CHECK_IN = gql`
  query MyQuery {
    check_in {
      id
      comment
      created_at
      image_url
      name
      updated_at
    }
  }
`;
