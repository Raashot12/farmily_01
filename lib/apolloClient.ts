import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri: "https://backend-stagging.farmily.africa/graphql",
  cache: new InMemoryCache(),
})

export default client
