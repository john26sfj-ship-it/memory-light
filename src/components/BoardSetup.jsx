import { useEffect, useState, createContext } from "react";
import Card from "./Card";
import styles from "./styles/BoardSetup.module.css";

export default function BoardSetup({shuffledDeck}) {
    const [card1, setCard1] = useState(0)
    const [card2, setCard2] = useState(0)
    const [count, setCount] = useState(0)

    const handleCard1 = (newCard1) => {
        setCard1(newCard1)
    }
    const handleCard2 = (newCard2) => {
        setCard2(newCard2)
    }
    const handleCount = (newCount) => {
        setCount(newCount)
    }

    useEffect(()=> {
        if (card1 !== 0 || card2 !== 0) {
            if (card1 === card2 && count === 2) {
                console.log("cards are equal.");
                setCount(0);
            }
            else if(card1 !== card2 && count === 2) {
                console.log("Cards are NOT equal.");
                setCount(0);
            }
        }
    },[card1,card2])

    console.log(count);
    

    return (
        <div className={styles.board}>
            {shuffledDeck.map((eachCard, index) => (
                <Card key={index} eachCard={eachCard} index={index}
                currentCard1={card1} onCard1Change={handleCard1}
                currentCard2={card2} onCard2Change={handleCard2}
                currentCount={count} onCountChange={handleCount}/>
        ))}
        </div>
        );
    };
