const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");

const port = 4000;
const host = "localhost";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Query {
		hello: String
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello: () => "Hello world!"
	}
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
apolloServer.applyMiddleware({ app });

app.listen(port, host, () =>
	console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
);
