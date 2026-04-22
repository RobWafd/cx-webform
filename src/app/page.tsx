"use client";
import React from 'react';
import { useClientState } from '../contexts/ClientStateContext';
import { onboardingRules } from '../config/rules.config';

// Import Scenarios
import WelcomeUnregistered from '../components/scenarios/WelcomeUnregistered';
import Fallback from '../components/scenarios/Fallback';

// Dynamic Component Mapper
const componentRegistry: Record<string, React.ElementType> = {
  "WelcomeUnregistered": WelcomeUnregistered,
  "Fallback": Fallback
};

export default function ConditionalDriver() {
  const state = useClientState();

  // Evaluate the Rules Engine top to bottom.
  const activeRule = onboardingRules.find(rule => rule.condition(state));

  // Determine the Component mapping. Fallback if logic gaps occur.
  const ComponentToRender = activeRule && componentRegistry[activeRule.scenarioComponent]
    ? componentRegistry[activeRule.scenarioComponent]
    : Fallback;

  return <ComponentToRender />;
}
