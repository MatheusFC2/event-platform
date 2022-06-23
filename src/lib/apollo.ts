import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({ 
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ob1rxv1orz01xi26h531h2/master',
    cache: new InMemoryCache
})