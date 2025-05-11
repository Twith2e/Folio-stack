import { ComponentType } from "react";

export type FeatureCardPropsType = {
  title: string;
  description: string;
  Icon: ComponentType<{
    size?: number | string;
    color?: string;
    className?: string;
  }>;
};

export interface Profile {
  name: string;
  bio: string;
  skills: string[];
  projects: Project[];
  theme: Theme;
  templateId: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
}

export type Work = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface Theme {
  primary: string;
  secondary: string;
}

export interface PortfolioState {
  profile: Profile;
  projects: Project[];
  theme: Theme;
  templateId: string;
}

export type PortfolioAction =
  | { type: "SET_PROFILE"; payload: Profile }
  | {
      type: "UPDATE_PROFILE_FIELD";
      field: keyof Profile;
      value: string | string[];
    }
  | { type: "UPDATE_WORK_EXPERIENCE"; payload: Work[] }
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "REMOVE_PROJECT"; payload: { title: string } }
  | { type: "SET_THEME"; payload: Theme }
  | { type: "SET_TEMPLATE"; payload: string };
