import { useState } from "react";
import styles from "./styles/Card.module.css";


export default function Card({eachCard, index, currentCard1, onCard1Change, currentCard2, onCard2Change, currentCount, onCountChange}) {
    const [cardClicked, setCardClicked] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const whenCardClicked = () => {
        setCardClicked(prevState => !prevState);
        setIsFlipped(!isFlipped);

        if (currentCount === 0) {
            onCard1Change(eachCard);
            onCountChange(currentCount + 1);
            console.log("Card1: ", cardClicked);
            console.log("Cardclicker = ", eachCard, index);
        }
        else if(currentCount === 1) {
            onCard2Change(eachCard);
            onCountChange(currentCount + 1);
            console.log("Card2: ", cardClicked);
            console.log("Cardclicker = ", eachCard, index);
        }
        else if(currentCount === 2) {
          setIsFlipped(false);
          onCountChange(0);
        }
        }        
    
    if(isFlipped) {
      return (
        <div onClick={whenCardClicked} className={styles.cardFront} key={index}>
          {eachCard}
        </div>
      );
    }
    else {
      return (
        <div onClick={whenCardClicked} className={styles.cardBack} key={index}>
          <p className={styles.icon}>?</p>
        </div>
      )
    }
}
