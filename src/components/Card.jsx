import { useState } from "react";
import styles from "./styles/BoardSetup.module.css";


export default function Card({eachCard, index}) {
    const [cardClicked, setCardClicked] = useState(false);
    const whenCardClicked = () => {
        setCardClicked(prevState => !prevState);
        console.log("New useState?: ", cardClicked);
        console.log("Cardclicker = ", eachCard, index);
                
    }

  return (
    <div onClick={whenCardClicked} className={styles.card} key={index}>
      {eachCard}
    </div>
  );
}
