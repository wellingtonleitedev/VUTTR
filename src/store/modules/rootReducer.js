import { combineReducers } from 'redux';
import tools from './tools/reducer';
import modal from './modal/reducer';

export default combineReducers({ tools, modal });
