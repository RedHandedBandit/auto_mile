import {createStore, combineReducers} from 'redux';
import reducer from './reducers/reducer';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
    reducer: reducer,
    customer: customerReducer
})

export default createStore(rootReducer)