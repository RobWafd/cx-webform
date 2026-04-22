"use client";
import { useClientState } from '../contexts/ClientStateContext';

export function useDynamicText() {
  const state = useClientState();

  // Helper function to safely replace @{variables} dynamically across any inbound text
  const parseText = (text: string): string => {
    let output = text;

    // We regex match the specific dynamic markers: @{account_firstname}, @{input_last4digits}, etc.
    const mappings: Record<string, string | null> = {
      '@{account_firstname}': state.account_firstname,
      '@{input_last4digits}': state.input_last4digits,
      '@{input_productname}': state.input_productname
    };

    Object.keys(mappings).forEach(token => {
      // If the mapping exists, inject it. If missing/null, graceful failure defaults to empty string!
      const val = mappings[token] ? mappings[token] : '';
      output = output.split(token).join(val as string);
    });

    return output;
  };

  return { parseText };
}
