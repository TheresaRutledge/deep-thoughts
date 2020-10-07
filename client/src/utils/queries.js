import gql from 'graphql-tag';

// get all thoughts
export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

// get single thought by ID
export const QUERY_THOUGHT = gql`
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_USER = gql`
query user($username:String!){
  user(username:$username){
      _id
    username
    email
    friendCount
    thoughts{
      _id
      thoughtText
      createdAt
      reactionCount
    }
    friends{
      username
      _id
    } 
  }
} `;