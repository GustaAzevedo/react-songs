import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://related-cattle-80.hasura.app/v1/graphql',
    headers: { 'x-hasura-admin-secret' : 'MKhjbE37bIZqgPae10DMhEaJcqyVGRJxzV3hwMTrtZ6hnq22MTdGTMFbo9XpupVq' },
    cache: new InMemoryCache(),
});