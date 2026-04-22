import { ClientState } from '../contexts/ClientStateContext';

export interface OnboardingRule {
  scenarioId: string;
  condition: (state: ClientState) => boolean;
  scenarioComponent: "WelcomeUnregistered" | "WelcomeRegistered" | "RewardsHighlight" | "Fallback";
}

// Logic rules are evaluated chronologically top to bottom.
export const onboardingRules: OnboardingRule[] = [
  {
    scenarioId: "registered_with_rewards",
    condition: (state) => state.isRegistered && state.completedSteps.includes('feature_rewards'),
    scenarioComponent: "RewardsHighlight"
  },
  {
    scenarioId: "registered_Standard",
    condition: (state) => state.isRegistered,
    scenarioComponent: "WelcomeRegistered"
  },
  {
    scenarioId: "unregistered_default",
    condition: (state) => !state.isRegistered,
    scenarioComponent: "WelcomeUnregistered"
  }
];
