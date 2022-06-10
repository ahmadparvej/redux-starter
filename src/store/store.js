import { legacy_createStore , applyMiddleware, combineReducers, compose} from 'redux'
import { authReducer } from './auth/auth.reducer';
import { feedReducer } from './feed/feed.reducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    auth:authReducer,
    feed:feedReducer
  })
  
export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

