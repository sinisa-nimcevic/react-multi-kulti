import React from "react";
import AppRouter from "Components/AppRouter/AppRouter";
import { Helmet } from "react-helmet";
import { DataProvider } from "Config/context";
import { createClient } from "Config/client";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
	const apolloProviderClient = createClient();

	return (
		<div className="App">
			<Helmet>
				<title>React</title>
				<meta name="description" content="react application" />
			</Helmet>
			<DataProvider>
				<ApolloProvider client={apolloProviderClient}>
					<AppRouter />
				</ApolloProvider>
			</DataProvider>
		</div>
	);
}

export default App;
