import React from "react";
import Layout from "./Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookList from "./Templates/BookList";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <BookList />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
