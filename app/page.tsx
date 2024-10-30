import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import PricingPlans from "@/components/pricing/pricing-plans";
import { SubscriptionPlansResponse } from "@/types/types";
import { get } from "@/utils/apiClient";

const Page = async () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5teXZ2ZXJzZS5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjkxNzE0MjcsImV4cCI6MTczMTc2MzQyNywibmJmIjoxNzI5MTcxNDI3LCJqdGkiOiJFREZRQnQxSGhETlF2WGdzIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.WiBAt3LG5JYhsyJJTRGnqGxUdMGObVtgZa2uulQX5cg";

  const result = await get<SubscriptionPlansResponse>(
    "/plans/subscription/plans",
    token
  );

  return (
    <div>
      <Heading title={"My plan"} />
      <HeroSection />
      <section className="w-full overflow-hidden border-2 shadow-lg rounded-xl my-5 bg-white py-12 md:py-24 lg:py-32">
        <PricingPlans plans={result?.data} />
      </section>
    </div>
  );
};

export default Page;
