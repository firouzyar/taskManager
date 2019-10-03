import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import CourseReducer from "./Reducers/courseReducer";
const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(combineReducers({
            Course: CourseReducer
        }
        ),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}