interface PricingToggleProps {
  billingInterval: "monthly" | "annually";
  setBillingInterval: (interval: "monthly" | "annually") => void;
}

export function PricingToggle({
  billingInterval,
  setBillingInterval,
}: PricingToggleProps) {
  return (
    <div className="relative inline-flex rounded-full bg-gray-100 p-1 shadow-sm ">
      {/* Discount Badge */}
      <div className="absolute -right-4 -top-12">
        <div className="rounded-lg bg-[#0B53B4] px-6 py-2 text-center">
          <span className="text-xl font-bold text-white">20% Discount</span>
        </div>
        {/* Triangle */}
        <div className="absolute left-1/2 top-[95%] h-0 w-0 -translate-x-1/2 transform border-x-[8px] border-t-[8px] border-x-transparent border-t-[#0B53B4]"></div>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-1">
        <button
          onClick={() => setBillingInterval("monthly")}
          className={`relative rounded-full px-8 py-3 text-xl font-bold transition-all duration-200 ${
            billingInterval === "monthly"
              ? "bg-gradient-to-r from-[#016DEA] to-[#FA0101] text-white"
              : "text-[#016DEA] hover:bg-gray-100"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingInterval("annually")}
          className={`relative rounded-full px-8 py-3 text-xl font-bold transition-all duration-200 ${
            billingInterval === "annually"
              ? "bg-gradient-to-r from-[#016DEA] to-[#FA0101] text-white"
              : "text-[#016DEA] hover:bg-gray-100"
          }`}
        >
          Annually
        </button>
      </div>
    </div>
  );
}
