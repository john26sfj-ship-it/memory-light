import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./styles/BoardSetup.module.css";

export default function BoardSetup({shuffledDeck}) {
    const [card1, setCard1] = useState(0)
    const [card2, setCard2] = useState(0)

    // function checkCards() {
    //     return
    // }
    useEffect(()=> {
        if (card1 !== 0 || card2 !== 0) {
            if (card1 === card2) {
                console.log("cards are equal");
            
            }
        }
    },[card1,card2])

    return (
        <div className={styles.board}>
            {shuffledDeck.map((eachCard, index) => (
                <Card key={index} eachCard={eachCard} index={index}/>
        ))}
        </div>
        );
    };
