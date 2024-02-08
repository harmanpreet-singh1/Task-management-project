import { createContext, Dispatch, PropsWithChildren, useMemo, useReducer } from 'react';
import { appStateReducer, initialState } from '../Reducers';
import { AppStateData } from "../Interfaces";

type Action = any; // Todo: Need to create actual actions

interface Props {
  state: AppStateData;
  dispatch: Dispatch<Action>;
}

// Creating a context for application state management
export const AppStateContext = createContext<Props>({} as Props);

// Provider component for managing application state
export const AppStateProvider = ({ children }: PropsWithChildren<object>) => {
  // Using useReducer to manage state based on appStateReducer and initialState
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  // Memoizing store object to prevent unnecessary re-renders
  const store: Props = useMemo(() => ({ state, dispatch }), [state]);

  // Rendering the AppStateContext.Provider with the provided children
  return <AppStateContext.Provider value={store}>{children}</AppStateContext.Provider>;
};
