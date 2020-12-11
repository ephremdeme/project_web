import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
  mutation uploadFile($file: Upload!, $productId: Int!) {
    uploadImage(file: $file, productId: $productId) {
      id
      filename
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    product(id: $id) {
      id
      name
      quantity
      views
      shortDescription
      fullDescription
      seller {
        phone
      }
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

export const GET_ALL_PRODUCTS = gql`
  query getProducts($offset: Int, $limit: Int) {
    products(offset: $offset, limit: $limit) {
      count
      products {
        id
        name
        quantity
        shortDescription
        fullDescription
        price
        seller {
          phone
        }
        rating {
          count
          rating
        }
        images {
          filename
        }
        category {
          id
          category
        }
        subCategory {
          id
          category
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  {
    categories {
      id
      category
      SubCategory {
        id
        category
      }
    }
  }
`;

export const ADD_RATE = gql`
  mutation addRating($rating: Int!, $ProductId: Int!) {
    rate(rating: $rating, ProductId: $ProductId) {
      count
      rating
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
export const UPDATE_COMMENT = gql`
  mutation updateComment($comment: String!, $id: Int!) {
    updateComment(comment: $comment, id: $id) {
      id
      comment
    }
  }
`;
export const PRODUCT_COMMENTS = gql`
  query getProductComments($productId: Int!, offset: Int!, limit: Int) {
    comments(productId: $productId) {
      count
      comments {
        id
        comment
      }
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
