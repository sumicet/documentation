// make typescript work with redux

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
