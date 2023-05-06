"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Table from "@/components/table/Table";
import HeroSection from "@/components/heroSection/HeroSection";
import RefetchProvider from "@/Context/RefetchingContext";

const client = new ApolloClient({
  uri: "https://profound-marmot-29.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RefetchProvider>
        <HeroSection />
        <Table />
      </RefetchProvider>
    </ApolloProvider>
  );
}
