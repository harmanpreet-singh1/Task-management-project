import { useContext } from 'react';
import { AppStateContext } from '../Contexts';

// Hook for using the App state
const useAppState = () => useContext(AppStateContext);

export { useAppState };
