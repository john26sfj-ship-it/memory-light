import React, { useState } from 'react';
import BoardSetup from './BoardSetup';
import ShuffleDeck from "./ShuffleDeck"
import styles from "./styles/StartButton.module.css"

export default function StartButton() {
    const initialDeck = Array.from({ length: 8}, (_, i) => i+1).flatMap(i => [i, i]);
    const deckCopy = [...initialDeck];


    const [clicked, setClicked] = useState(false);
    const [shuffledDeck, setShuffledDeck] = useState([]);
    const [resetTrigger, setResetTrigger] = useState(0);

    const handleClick = () => {
        setShuffledDeck(ShuffleDeck(deckCopy));
        setClicked(true);
        setResetTrigger(prev => prev + 1);
    };
    
    return (
        <>
            <button className={styles.button} onClick={handleClick}>
                Start new game
            </button>
            <div className={styles.cardContainer}>
                {clicked && <BoardSetup shuffledDeck={shuffledDeck} resetTrigger={resetTrigger} />}
            </div>
        </>
    );
}