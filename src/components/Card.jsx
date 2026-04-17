import { useState } from "react";
import styles from "./styles/Card.module.css";
import archangel from "../images/archangel.png"


export default function Card({eachCard, index,  onCard1Change,  onCard2Change, currentCount, onCountChange, isFlipped, onFlipChange, isFound, isWaiting}) {
    const [cardClicked, setCardClicked] = useState(false);

    const whenCardClicked = () => {
        if (isFound || isWaiting) return;

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
            {/* <p className={styles.icon}>?</p> */}
            <img src={archangel} className={styles.image} alt="Drawing of an archangel" />
          </div>
        </div>
      </div>
    );
}
