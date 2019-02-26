const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");

const port = 4000;
const host = "localhost";

const books = [
	{
		title: "Harry Potter and the Chamber of Secrets",
		author: "J.K. Rowling"
	},
	{
		title: "Jurassic Park",
		author: "Michael Crichton"
	}
];

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	# Comments in GraphQL are defined with the hash (#) symbol.

	# This "Book" type can be used in other type declarations.
	type Book {
		title: String
		author: String
	}

	# The "Query" type is the root of all GraphQL queries.
	# (A "Mutation" type will be covered later on.)
	type Query {
		books: [Book]
	}
`;
// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		books: () => books
	}
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
apolloServer.applyMiddleware({ app });

app.listen(port, host, () => console.log(`🚀 Server ready at http://${host}:${port}/graphql`));
