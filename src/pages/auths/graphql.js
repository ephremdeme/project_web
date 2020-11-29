import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation createUser(
    $username: String!
    $phone: String!
    $password: String!
    $first_name: String!
    $last_name: String!
  ) {
    createUser(
      phone: $phone
      username: $username
      password: $password
      first_name: $first_name
      last_name: $last_name
    ) {
      id
      token
      User {
        id
        username
        phone
        status
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($password: String, $username: String) {
    login(password: $password, username: $username) {
      id
      token
      User {
        id
        username
      }
    }
  }
`;

export const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;


export const GET_USER = gql`
{
  getUser{
    id
    username
    phone
  }
}
`