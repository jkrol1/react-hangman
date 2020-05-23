import { CORRECT_USER_GUESS, INCORRECT_USER_GUESS, RESET_GAME, GAME_STARTED, FETCH_RANDOM_WORD } from '../actions/types';

const INITIAL_STATE = {
    randomWord: '',
    gameStarted: false,
    guessedLetters: '',
    userChances: 10,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RANDOM_WORD:
            return { ...state, randomWord: action.payload };
        case GAME_STARTED:
            state['gameStarted'] === false ? state['gameStarted'] = true : state['gameStarted'] = false;
            return { ...state };
        case CORRECT_USER_GUESS:
            state['guessedLetters'] += action.payload;
            return { ...state };
        case INCORRECT_USER_GUESS:
            state['userChances'] -= 1;
            return { ...state };
        case RESET_GAME:
            state['randomWord'] = '';
            state['guessedLetters'] = '';
            state['userChances'] = 10;
            return { ...state };
        default:
            return state;
    }
};
