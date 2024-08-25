import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql',  // GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
