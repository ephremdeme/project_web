import { gql } from "@apollo/client";

export const ADD_TO_WISHLIST = gql`
  mutation createWishlist($productId: Int!) {
    createWishlist(productId: $productId) {
      wishlist {
        id
      }
    }
  }
`;

export const REMOVE_WISHLIST = gql`
  mutation deleteWishlist($productId: Int!) {
    deleteWishlist(productId: $productId) {
      wishlist {
        id
      }
    }
  }
`;
export const REMOVE_ALL_WISHLIST = gql`
  mutation {
    deleteAllWishlist {
      wishlist {
        id
      }
    }
  }
`;

export const ORDER_PRODUCTS = gql`
  mutation createOrder($orders: OrderInput!) {
    createOrder(orders: $orders) {
      message
      code
      order {
        id
        status
        confirmation_num
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation createContact(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    createContact(
      name: $name
      email: $email
      subject: $subject
      message: $message
    ) {
      id
      subject
    }
  }
`;
