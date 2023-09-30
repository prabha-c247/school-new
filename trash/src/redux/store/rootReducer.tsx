import { combineReducers } from 'redux';
import {planReducer} from '../reducers/planReducer';
import schoolReducer from '../reducers/schoolReducer';
import { userReducer } from '../reducers/userReducer';

const rootReducer = combineReducers({
  plan: planReducer,     // planReducer handles 'plan' state
  school: schoolReducer, // schoolReducer handles 'school' state
  user:userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
