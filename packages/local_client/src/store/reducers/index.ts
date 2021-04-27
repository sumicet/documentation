import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';

const reducers = combineReducers({
    cells: cellsReducer,
    bundles: bundlesReducer,
});

export default reducers;

// to apply types to useSelector
export type RootState = ReturnType<typeof reducers>;
