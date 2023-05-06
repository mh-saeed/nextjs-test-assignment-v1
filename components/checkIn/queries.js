import { gql } from "@apollo/client";

export const POST_CHECK_IN = gql`
  mutation MyMutation($check_in: check_in_insert_input!) {
    insert_check_in_one(object: $check_in) {
      id
      name
      image_url
      created_at
    }
  }
`;
