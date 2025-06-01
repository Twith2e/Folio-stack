"use client";

import { createContext, useContext, useReducer } from "react";
import { PortfolioState, PortfolioAction } from "../definitions";

const PortfolioStateContext = createContext<PortfolioState | undefined>(
  undefined
);

const PortfolioDispatchContext = createContext<
  React.Dispatch<PortfolioAction> | undefined
>(undefined);

const initialState: PortfolioState = {
  profile: {
    name: "",
    bio: "",
    skills: [],
    projects: [],
    theme: {
      primary: "",
      secondary: "",
    },
    templateId: "",
    email: "",
    linkedin: "",
    github: "",
    whatsapp: "",
  },
};

function portfolioReducer(
  state: PortfolioState,
  action: PortfolioAction
): PortfolioState {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  return (
    <PortfolioStateContext.Provider value={state}>
      <PortfolioDispatchContext.Provider value={dispatch}>
        {children}
      </PortfolioDispatchContext.Provider>
    </PortfolioStateContext.Provider>
  );
}

export function usePortfolioState() {
  const context = useContext(PortfolioStateContext);
  if (context === undefined) {
    throw new Error(
      "usePortfolioState must be used within a PortfolioProvider"
    );
  }
  return context;
}

export function usePortfolioDispatch() {
  const context = useContext(PortfolioDispatchContext);
  if (context === undefined) {
    throw new Error(
      "usePortfolioDispatch must be used within a PortfolioProvider"
    );
  }
  return context;
}
