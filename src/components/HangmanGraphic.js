import React from 'react';
import hangmanSvgParts from '../assets/hangmanSvgParts';

const HangmanGraphic = ({ userChances }) => {

    return (
        <section className="hangman">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 240">
                <g id="svg_23">
                    {hangmanSvgParts.slice(0, 10 - userChances)}
                </g>
            </svg>
        </section >
    );
};

export default HangmanGraphic;