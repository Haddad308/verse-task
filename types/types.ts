export type BillingInterval = "monthly" | "annually";

export interface PlanFeature {
  name: string;
  value: string | number | boolean;
}

// types/types.ts
export interface SubscriptionPlansResponse {
  data: Plan[]; // Assuming 'data' is an array of Plan objects
  // Add any other fields that are returned from your API
}

export interface Plan {
  id: string;
  name: string;
  price_in_annually: number;
  price_in_monthly: number;
  description: string;
  features: {
    id: number;
    name: string;
    description: string | null;
    module_enum: string;
    type: string;
    quantity: number;
  }[];
  isPopular?: boolean;
}

export interface PricingCardProps {
  plan: Plan;
  billingInterval: BillingInterval;
  all?: boolean;
}

export interface Feature {
  name: string;
  quantity: number;
}

export interface PricingPlansProps {
  plans: Plan[];
}

export interface VWebinarsSwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}
