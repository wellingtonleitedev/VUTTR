import { combineReducers } from 'redux';
import tools from './tools/reducer';
import modal from './modal/reducer';
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({ tools, modal, auth, user });
