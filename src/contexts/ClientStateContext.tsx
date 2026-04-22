"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export interface ClientState {
  isRegistered: boolean;
  completedSteps: string[];
  account_firstname: string | null;
  input_last4digits: string | null;
  input_productname: string | null;
}

const defaultState: ClientState = {
  isRegistered: false,
  completedSteps: [],
  account_firstname: null,
  input_last4digits: null,
  input_productname: null,
};

const ClientStateContext = createContext<ClientState>(defaultState);

export function ClientStateProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [state, setState] = useState<ClientState>(defaultState);

  useEffect(() => {
    // Secure URL mocking layer imitating pending Mongo/Logic App Integration.
    setState({
      isRegistered: searchParams.get('isRegistered') === 'true',
      completedSteps: searchParams.get('completedSteps')?.split(',') || [],
      account_firstname: searchParams.get('account_firstname') || searchParams.get('firstName') || null,
      input_last4digits: searchParams.get('input_last4digits') || null,
      input_productname: searchParams.get('input_productname') || null,
    });
  }, [searchParams]);

  return (
    <ClientStateContext.Provider value={state}>
      {children}
    </ClientStateContext.Provider>
  );
}

export function useClientState() {
  return useContext(ClientStateContext);
}
