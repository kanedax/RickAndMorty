import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// for using graphql one of the best choices is appolloClient 
// that can fetch data and act like a state management

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

export const Get_Characters = gql`
    query Character($page: Int){
    characters(page:$page){
        results {
            id
            name
            image
            status
            gender
            species
            location{
                name
            }
            origin{
              name
            }
        }
    }
}`