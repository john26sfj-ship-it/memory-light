import { useState } from "react";
import styles from "./styles/Card.module.css";


export default function Card({eachCard, index, currentCard1, onCard1Change, currentCard2, onCard2Change, currentCount, onCountChange, isFlipped, onFlipChange, isFound}) {
    const [cardClicked, setCardClicked] = useState(false);

    const whenCardClicked = () => {
        if (isFound) return;

        setCardClicked(prevState => !prevState);
        onFlipChange(true);

        if (currentCount === 0) {
            onCard1Change(eachCard, index);
            onCountChange(currentCount + 1);
        }
        else if(currentCount === 1) {
            onCard2Change(eachCard, index);
            onCountChange(currentCount + 1);
        }
    }

    const isFlippedState = isFlipped || isFound;

    return (
      <div className={styles.cardContainer} onClick={whenCardClicked} key={index}>
        <div className={`${styles.cardInner} ${isFlippedState ? styles.isFlipped : ''}`}>
          <div className={`${styles.cardFace} ${styles.cardFront}`}>
            {eachCard}
          </div>
          <div className={`${styles.cardFace} ${styles.cardBack}`}>
            <p className={styles.icon}>?</p>
          </div>
        </div>
      </div>
    );
}
