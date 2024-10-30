"use client";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = (props: Props) => {
  const { children } = props;

  return (
    <div className={clsx("mx-auto max-w-[1450px] pt-[104px] pb-[30px]")}>
      {children}
    </div>
  );
};

export default LayoutWrapper;
