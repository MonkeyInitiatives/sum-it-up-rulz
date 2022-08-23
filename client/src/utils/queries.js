import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      summaries {
        _id
        summaryText
        createdAt
      }
    }
  }
`;

export const QUERY_SUMMARIES = gql`
  query getSummaries {
    summaries {
      _id
      summaryText
      createdAt
    }
  }
`;

export const QUERY_SINGLE_SUMMARY = gql`
  query getSingleSummary($summaryId: ID!) {
    summary(summaryId: $summaryId) {
      _id
      summaryText
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      summaries {
        _id
        summaryText
        createdAt
      }
    }
  }
`;

export const QUERY_GET_SUMMARY = gql`
    query getSummary($text: String!, $sentnum: Int) {
        getSummary(text: $text, sentnum: $sentnum) {
        sentences
        }
    }
`;

