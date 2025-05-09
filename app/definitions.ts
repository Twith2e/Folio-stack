import { ComponentType, ReactNode } from "react";

export type FeatureCardPropsType = {
  title: string;
  description: string;
  Icon: ComponentType<{
    size?: number | string;
    color?: string;
    className?: string;
  }>;
};
