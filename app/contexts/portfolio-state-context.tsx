"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { PortfolioAction, PortfolioState, Work } from "../definitions";

const initialState: PortfolioState = {
  profile: {
    name: "",
    bio: "",
    skills: [],
    projects: [],
    theme: { primary: "#4F46E5", secondary: "#22C55E" },
    templateId: "default",
    email: "",
    linkedin: "",
    github: "",
    whatsapp: "",
  },
  projects: [],
  theme: { primary: "#4F46E5", secondary: "#22C55E" },
  templateId: "default",
  work: [],
};

function portfolioReducer(state: PortfolioState, action: PortfolioAction) {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "UPDATE_WORK_EXPERIENCE": {
      // copy the existing array
      const updatedWork = [...state.work];

      // your full default entry (must satisfy your Work type)
      const defaultWorkEntry: Work = {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        logo: "",
      };

      const { index, field, value } = action.payload;

      if (index < updatedWork.length) {
        // — update in‐place if it already exists
        updatedWork[index] = {
          ...updatedWork[index],
          [field]: value,
        };
      } else {
        // — append a brand-new entry if index == length (or beyond)
        //    we fill in defaults *then* set the one field
        updatedWork.push({
          ...defaultWorkEntry,
          [field]: value,
        });
      }

      return {
        ...state,
        work: updatedWork,
      };
    }

    case "ADD_WORK_EXPERIENCE":
      return {
        ...state,
        work: [...state.work, action.payload],
      };
    case "UPDATE_SPECIFIC_WORK_EXPERIENCE":
      return {
        ...state,
        work: state.work.map((item, index) =>
          index === action.index ? action.payload : item
        ),
      };
    case "REMOVE_WORK_EXPERIENCE":
      return {
        ...state,
        work: state.work.filter((_, index) => index !== action.index),
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.title !== action.payload.title
        ),
      };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_TEMPLATE":
      return { ...state, templateId: action.payload };
    default:
      return state;
  }
}

const PortfolioStateContext = createContext<PortfolioState | undefined>(
  undefined
);
const PortfolioDispatchContext = createContext<
  Dispatch<PortfolioAction> | undefined
>(undefined);

export function usePortfolioState(): PortfolioState {
  const ctx = useContext(PortfolioStateContext);
  if (!ctx) return initialState;
  return ctx;
}

export function usePortfolioDispatch(): Dispatch<PortfolioAction> | undefined {
  const ctx = useContext(PortfolioDispatchContext);
  if (!ctx)
    throw new Error(
      "usePortfolioDispatch must be used within a PortfolioProvider"
    );
  return ctx;
}

interface ProviderProps {
  children: ReactNode;
}

export function PortfolioProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  return (
    <PortfolioStateContext.Provider value={state}>
      <PortfolioDispatchContext.Provider value={dispatch}>
        {children}
      </PortfolioDispatchContext.Provider>
    </PortfolioStateContext.Provider>
  );
}
