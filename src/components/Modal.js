import React from 'react';

const Modal = ({ message, actions, randomWord }) => {

    if (randomWord) {
        return (
            <div className="modal">
                <h1 className="modal__game-state">
                    {message}
                </h1>
                <h2 className="modal__randomWord">
                    <p className="modal__text">Correct answer:</p>
                    <p className="modal__answer">{randomWord}</p>
                </h2>
                <div className="modal__actions">
                    {actions}
                </div>
            </div>
        );
    } else {

        return (
            <div className="modal">
                <h1 className="modal__game-state">
                    {message}
                </h1>
                <div className="modal__actions">
                    {actions}
                </div>
            </div>
        );
    };
};

export default Modal;