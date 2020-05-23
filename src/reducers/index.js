import { combineReducers } from 'redux';
import gameStateReducer from './gameStateReducer';

export default combineReducers({
    gameState: gameStateReducer
});