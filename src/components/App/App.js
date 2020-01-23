import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { DataProvider } from "Config/context";
import { createClient } from "Config/client";
import AppRouter from "Components/AppRouter/AppRouter";

import "Styles/main.scss";

function App() {
	const apolloProviderClient = createClient();

	return (
		<div className="App">
			<DataProvider>
				<ApolloProvider client={apolloProviderClient}>
					<AppRouter />
				</ApolloProvider>
			</DataProvider>
		</div>
	);
}

export default App;
