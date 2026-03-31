import { useState } from "react";
import styles from "./styles/Card.module.css";


export default function Card({eachCard, index, currentCard1, onCard1Change, currentCard2, onCard2Change, currentCount, onCountChange, isFlipped, onFlipChange, isFound}) {
    const [cardClicked, setCardClicked] = useState(false);

    const resetBoard = () => {
      index.forEach(element => {
        
      });
    }

    const whenCardClicked = () => {
        if (isFound) return;

        setCardClicked(prevState => !prevState);
        onFlipChange(!isFlipped);

        if (currentCount === 0) {
            onCard1Change(eachCard, index);
            onCountChange(currentCount + 1);
            console.log(`Num on card1: ${eachCard}, with index: ${index}`);
        }
        else if(currentCount === 1) {
            onCard2Change(eachCard, index);
            onCountChange(currentCount + 1);
            console.log(`Num on card2: ${eachCard}, with index: ${index}`);
        }
        else if(currentCount === 2) {
          onFlipChange(false);
          onCountChange(0);
        }
        }        
    
    if(isFlipped) {
      return (
        <div id={index} onClick={whenCardClicked} className={styles.cardFront} key={index}>
          {eachCard}
        </div>
      );
    }
    else {
      return (
        <div id={index} onClick={whenCardClicked} className={styles.cardBack} key={index}>
          <p className={styles.icon}>?</p>
        </div>
      )
    }
}
