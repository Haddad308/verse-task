"use client";

import { useState } from "react";
import { PricingToggle } from "./pricing-toggle";
import { PricingCard } from "./pricing-card";
import { BillingInterval, PricingPlansProps } from "@/types/types";
import clsx from "clsx";

const PricingPlans: React.FC<PricingPlansProps> = ({ plans }) => {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("monthly");

  const renderPricingCards = (isComparison: boolean) =>
    plans.map((plan) => (
      <PricingCard
        key={plan.id}
        plan={plan}
        billingInterval={billingInterval}
        all={isComparison}
      />
    ));

  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="bg-gradient-to-r from-[#016DEA] to-[#FA0101] bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
            VV AWESOME PLANS
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Kindly Note That The quotas Mentioned For Each Feature Of Each Plan
            Below, Is Your Total Account Quotas That You Will Be Able To Use
            Across All Your Personal & Entities Profiles Inside Your Account
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <PricingToggle
            billingInterval={billingInterval}
            setBillingInterval={setBillingInterval}
          />
        </div>

        <div className="mt-12 mx-auto grid md:grid-cols-2 lg:grid-cols-4">
          {renderPricingCards(false)}
        </div>

        <div className="flex items-center my-10">
          <div className="h-[2px] w-full flex-1 bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)]"></div>
          <h3
            className={clsx(
              "uppercase text-3xl font-poppins whitespace-nowrap bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)] bg-clip-text font-bold not-italic leading-6 text-transparent"
            )}
          >
            Compare All Features
          </h3>
          <div className="h-[2px] w-full flex-1 bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mt-12 mx-auto grid md:grid-cols-2 lg:grid-cols-4">
          {renderPricingCards(true)}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
