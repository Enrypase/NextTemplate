"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function Providers(props: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 5,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
      },
    },
  });
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </SessionProvider>
  );
}
