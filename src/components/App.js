import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetGame, fetchRandomWord, gameStarted } from '../actions/index';
import HangmanGraphic from './HangmanGraphic';
import GuessFields from './GuessFields';
import UserInput from './UserInput';
import Modal from './Modal';

const actionButton = (dispatch, action) => {

    if (action === 'gameStart') {
        return (
            <>
                <button className="modal__btn" onClick={() => dispatch(gameStarted())}>Start</button>
            </>
        )
    }
    else if (action === 'gameLost' || action === 'gameWon') {
        return (
            <>
                <button className="modal__btn" onClick={() => {
                    dispatch(resetGame())
                    dispatch(fetchRandomWord())
                }
                }>{action === 'gameWon' ? 'Next Word' : 'Try Again'}</button>
            </>
        )
    };
};

const checkIfGameWon = (randomWord, guessedLetters) => {

    const randomWordWoDuplicates = Array.from(new Set(randomWord)).join('').replace('-', '');
    const gameWon = randomWordWoDuplicates.length === guessedLetters.length & randomWord !== '';
    return gameWon;
}

const App = () => {

    const { userChances, gameStarted, guessedLetters, randomWord } = useSelector(state => state.gameState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRandomWord());
    }, []);

    if (gameStarted === false) {
        return <Modal message="Click Start to Play the game :)" actions={actionButton(dispatch, 'gameStart')} />
    }

    else if (userChances === 0) {
        return <Modal message="Game Over :(" randomWord={randomWord} actions={actionButton(dispatch, 'gameLost')} />
    }

    else if (checkIfGameWon(randomWord, guessedLetters)) {
        return <Modal message="You Won ! :)" randomWord={randomWord} actions={actionButton(dispatch, 'gameWon')} />
    }

    return (
        <div className="wrapper">
            <HangmanGraphic userChances={userChances} />
            <GuessFields randomWord={randomWord} guessedLetters={guessedLetters} />
            <UserInput randomWord={randomWord} dispatch={dispatch} />
        </div>
    );

};

export default App;