import React from 'react';
import { correctUserGuess, incorrectUserGuess } from '../actions/index';

const checkLetter = (letterContainer, randomWord, dispatch) => {

    if (randomWord.includes(letterContainer.textContent)) {
        letterContainer.classList.add('input__letter--correct');
        dispatch(correctUserGuess(letterContainer.textContent));
    } else {
        letterContainer.classList.add('input__letter--incorrect');
        dispatch(incorrectUserGuess());
    }

};

const UserInput = ({ randomWord, dispatch }) => {

    let letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

    letters = letters.map((letter) => {
        return <div key={letter} onClick={(e) => checkLetter(e.currentTarget, randomWord, dispatch)} className="input__letter">{letter}</div>;
    });

    return (
        <section className="input">
            {letters}
        </section>
    );

};

export default UserInput;
