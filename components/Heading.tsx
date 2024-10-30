"use client";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  buttonEndIcon?: ReactNode;
  buttonStartIcon?: ReactNode;
  onClick?: () => void;
  title: string | object;
  customClass?: string;
  customContainerClass?: string;
  buttonDisabled?: boolean;
  type?: "primary" | "secondary";
  rightChild?: ReactNode;
  lineHidden?: boolean;
  stroke?: string | undefined;
};

const Heading = (props: Props) => {
  const {
    title,
    customClass,
    customContainerClass,
    lineHidden = true,
    stroke = undefined,
  } = props;
  return (
    <div
      className={clsx(
        "flex min-h-6 items-center space-x-2.5 self-stretch",
        customClass,
        customContainerClass
      )}
    >
      <div className="flex">
        {title && typeof title === "object" ? (
          Object.values(title).map((t, ind) => (
            <div key={ind} className="flex">
              <h3
                className={clsx(
                  "font-poppins whitespace-nowrap bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)] bg-clip-text text-xl/6 font-bold not-italic leading-6 text-transparent",
                  customClass
                )}
              >
                {t}
              </h3>
              {title && ind !== Object.values(title).length - 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke={stroke || "url(#paint0_linear_7041_649673)"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7041_649673"
                      x1="11.3472"
                      y1="17.4091"
                      x2="17.1256"
                      y2="15.9034"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#016DEA" />
                      <stop offset="1" stopColor="#FA0101" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          ))
        ) : (
          <h3
            className={clsx(
              "font-poppins whitespace-nowrap bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)] bg-clip-text text-xl/6 font-bold not-italic leading-6 text-transparent",
              customClass
            )}
          >
            {title}
          </h3>
        )}
      </div>

      {lineHidden && (
        <div className="h-[1px] w-full flex-1 bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)]"></div>
      )}
    </div>
  );
};

export default Heading;
