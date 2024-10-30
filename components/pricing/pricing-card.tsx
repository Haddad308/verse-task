import { Button } from "@/components/ui/button";
import { VWebinarsSwitch } from "./v-webinars-switch";
import { Feature, PricingCardProps } from "@/types/types";

const POPULAR_PLAN_LABEL = "MOST POPULAR";
const FREE_PLAN_LABEL = "Activate Plan";
const ACTIVE_PLAN_LABEL = "Active Plan";

const FeatureList = ({ features }: { features: Feature[] }) => (
  <ul className="mt-4 space-y-4 px-6">
    {features.map(({ name, quantity }, idx) => (
      <li key={idx} className="flex flex-col justify-between text-zinc-500">
        <div className="flex justify-between line-clamp-1">
          <span className="line-clamp-1 whitespace-nowrap">{name}</span>
          {quantity ? (
            <p className="text-blue-500 line-clamp-1 whitespace-nowrap">
              {quantity}
            </p>
          ) : (
            <span className="text-red-500">N/A</span>
          )}
        </div>
        <div className="mt-1 h-[.1rem] bg-gray-200 w-full" />
      </li>
    ))}
  </ul>
);

export function PricingCard({ plan, billingInterval, all }: PricingCardProps) {
  const price =
    billingInterval === "monthly"
      ? plan.price_in_monthly
      : plan.price_in_annually;

  const uniqueModules = plan.features.reduce((acc, feature) => {
    acc.add(feature.module_enum);
    return acc;
  }, new Set<string>());

  const renderModuleFeatures = (moduleEnum: string) => {
    const moduleFeatures = plan.features.filter(
      (feature) => feature.module_enum === moduleEnum
    );
    return (
      <div key={moduleEnum}>
        <div className="bg-feature-gradient text-white p-3 flex justify-center">
          <h4 className="text-lg font-semibold">{moduleEnum} Features</h4>
        </div>
        <FeatureList features={moduleFeatures} />
      </div>
    );
  };

  return (
    <div
      className={`relative rounded-2xl bg-white py-6 shadow-2xl ${
        plan.name === "Platinum Plan"
          ? "border-t-4 border-blue-600"
          : "my-16 shadow-top"
      }`}
    >
      {plan.name === "Platinum Plan" && (
        <div className="absolute left-[25%] top-0 rounded-br-2xl rounded-bl-2xl bg-gradient-to-r from-blue-600 to-red-600 px-4 py-1 text-sm font-semibold text-white w-1/2 flex justify-center">
          {POPULAR_PLAN_LABEL}
        </div>
      )}
      <div
        className={`mb-4 px-6 flex flex-col items-center ${
          plan.name === "Platinum Plan" ? "mt-8" : ""
        }`}
      >
        <h3 className="text-xl font-bold text-zinc-500">{plan.name}</h3>
        <div className="mt-4 flex items-baseline gradient-text">
          <span className="text-5xl font-extrabold tracking-tight">
            ${price}
          </span>
          <span className="ml-1 text-xl font-semibold">/{billingInterval}</span>
        </div>
      </div>

      <div className="mt-6 space-y-4 px-6 flex justify-center">
        <VWebinarsSwitch checked />
      </div>

      <div className="flex justify-center">
        <Button
          className={`mt-8 w-1/2 rounded-full mx-auto bg-gradient-to-r from-[#016DEA] to-[#FA0101] hover:opacity-90`}
        >
          {plan.name === "FREE PLAN" ? FREE_PLAN_LABEL : ACTIVE_PLAN_LABEL}
        </Button>
      </div>

      <div className="mt-8">
        {all ? (
          [...uniqueModules].map(renderModuleFeatures)
        ) : (
          <>
            <div className="bg-feature-gradient text-white p-3 flex justify-center">
              <h4 className="text-lg font-semibold">General Features</h4>
            </div>
            <FeatureList
              features={plan.features.filter(
                (feature) => feature.module_enum === "General"
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}
