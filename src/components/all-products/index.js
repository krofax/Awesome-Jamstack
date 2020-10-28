import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query {
    smashingsList {
      items {
        name
        price
        description
        image {
          id
          downloadUrl
        }
      }
    }
  }
`;
export default PRODUCTS_QUERY;