import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import resolvers from './resolvers'

const server = new ApolloServer({
  // @ts-ignore
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
