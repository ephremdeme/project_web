import { gql } from "apollo-boost";

export const UPLOAD_IMAGE = gql`
  mutation uploadFile($file: Upload!, $productId: Int!) {
    uploadImage(file: $file, productId: $productId) {
      id
      filename
    }
  }
`;
export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $price: Float!
    $quantity: Int!
    $description: String!
    $categoryId: Int!
    $image: Upload!
  ) {
    createProduct(
      name: $name
      price: $price
      quantity: $quantity
      description: $description
      categoryId: $categoryId
      file: $image
    ) {
      id
      name
      price
      quantity
      description
      images {
        filename
      }
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation editProduct(
    $name: String!
    $price: Float!
    $quantity: Int!
    $description: String!
    $categoryId: Int!
    $image: Upload!
  ) {
    updateProduct(
      name: $name
      price: $price
      quantity: $quantity
      description: $description
      categoryId: $categoryId
      file: $image
    ) {
      id
      name
      price
      quantity
      description
      images {
        filename
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    product(id: $id) {
      id
      name
      price
      comments {
        id
        comment
      }
      images {
        filename
      }
      rating {
        count
        rating
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      price
      category {
        category
      }
      images {
        filename
      }
      rating {
        rating
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  {
    categories {
      id
      category
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($comment: String!, $productId: Int!) {
    createComment(comment: $comment, productId: $productId) {
      id
      comment
    }
  }
`;
export const PRODUCT_COMMENTS = gql`
  query getProductComments($productId: Int!) {
    comments(productId: $productId) {
      id
      comment
    }
  }
`;

export const COMMENTS = gql`
  {
    comments(productId: 6) {
      id
      comment
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`;
