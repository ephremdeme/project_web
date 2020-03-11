import { gql } from "apollo-boost";

export const REGISTER_USER = gql`
  mutation addUser(
    $first_name: String
    $last_name: String
    $email: String
    $password: String
  ) {
    createUser(
      firstName: $first_name
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
      firstName
      email
      lastName
    }
  }
`;

export const GET_USER = gql`
  query user($password: String, $email: String) {
    login(password: $password, email: $email) {
      id
      firstName
      email
      lastName
    }
  }
`;
