import { ApolloClient, ApolloLink, createHttpLink } from '@apollo/client';
import Config from 'react-native-config';
import { memCache } from './appmemory/memoryResolver';

const httpLink = createHttpLink({
  uri: Config.API_URL,
});

export const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: memCache,
});
