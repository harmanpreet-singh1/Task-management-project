import { useContext } from 'react';
import { AppStateContext } from '../Contexts';

const useAppState = () => useContext(AppStateContext);

export { useAppState };
