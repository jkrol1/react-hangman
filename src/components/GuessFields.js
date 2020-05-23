import React from 'react';

const renderGuessFields = (randomWord, guessedLetters) => {

    let guessFields = [];

    for (let i = 0; i < randomWord.length; i++) {

        if (guessedLetters.includes(randomWord[i])) {
            guessFields.push(<li key={`letter_${i}`} className="random-word__letter">{randomWord[i]}</li>);
        } else {
            guessFields.push(<li key={`letter_${i}`} className="random-word__letter">{randomWord[i] !== '-' ? '_' : '-'}</li>)
        };
    };

    return guessFields;

};

const GuessFields = ({ randomWord, guessedLetters }) => {

    return (
        <section className="random-word">
            <ul className="random-word__list">
                {renderGuessFields(randomWord, guessedLetters)}
            </ul>
        </section>
    );
};

export default GuessFields;