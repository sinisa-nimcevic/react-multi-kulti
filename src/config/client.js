import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

export function createClient() {
	const httpLink = new createHttpLink({
		uri: `http://google.com/graphql`
	});

	return new ApolloClient({
		link: ApolloLink.from([httpLink]),
		cache: new InMemoryCache()
	});
}
