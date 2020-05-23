import randomWord from '../apis/randomWord';

import { FETCH_RANDOM_WORD, CORRECT_USER_GUESS, INCORRECT_USER_GUESS, RESET_GAME, GAME_STARTED } from './types';

export const fetchRandomWord = () => async dispatch => {
    const response = await randomWord.get();
    dispatch({ type: FETCH_RANDOM_WORD, payload: response.data[0].toUpperCase() });
};

export const correctUserGuess = guess => {
    return {
        type: CORRECT_USER_GUESS,
        payload: guess
    }
};

export const incorrectUserGuess = () => {
    return {
        type: INCORRECT_USER_GUESS
    }
};

export const resetGame = () => {
    return {
        type: RESET_GAME
    }
};

export const gameStarted = () => {
    return {
        type: GAME_STARTED
    }
};