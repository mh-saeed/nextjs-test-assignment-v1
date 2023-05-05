"use client";

import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Table from "@/components/table/Table";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://profound-marmot-29.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <HeroSection />
      <Table />
    </ApolloProvider>
  );
}
