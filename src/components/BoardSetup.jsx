import { useEffect, useState, createContext } from "react";
import Card from "./Card";
import styles from "./styles/BoardSetup.module.css";

export default function BoardSetup({shuffledDeck, resetTrigger}) {
    const [card1, setCard1] = useState(0)
    const [card1Index, setCard1Index] = useState(null)
    const [card2, setCard2] = useState(0)
    const [card2Index, setCard2Index] = useState(null)
    const [count, setCount] = useState(0)
    const [flipped, setFlipped] = useState(new Array(shuffledDeck.length).fill(false))
    const [found, setFound] = useState([])
    const [numTurns, setNumTurns] = useState(0)
    const [win, setWin] = useState(false)
    const [isWaiting, setIsWaiting] = useState(false)

    const handleCard1 = (newCard1, index) => {
        setCard1(newCard1)
        setCard1Index(index)
    }
    const handleCard2 = (newCard2, index) => {
        setCard2(newCard2)
        setCard2Index(index)
    }
    const handleCount = (newCount) => {
        setCount(newCount)
    }

    // const resetAllFlipped = () => setFlipped(new Array(shuffledDeck.length).fill(false));

    useEffect(() => {
        setCard1(0);
        setCard1Index(null);
        setCard2(0);
        setCard2Index(null);
        setCount(0);
        setFlipped(new Array(shuffledDeck.length).fill(false));
        setFound([]);
        setNumTurns(0);
        setWin(false);
        setIsWaiting(false);
    }, [resetTrigger, shuffledDeck.length]);

    useEffect(()=> {
        if (card1 || card2) {
            
            if (card1 === card2 && count === 2) {
                setNumTurns(numTurns + 1);
                const newFound = [...found, card1Index, card2Index];
                setFound(newFound);
                if (newFound.length === shuffledDeck.length) {
                    setWin(true);
                }
                setCard1(0);
                setCard2(0);
                setCount(0);                
            }
            else if(card1 !== card2 && count === 2) {
                setIsWaiting(true);
                setNumTurns(numTurns + 1);
                setTimeout(() => {
                    setFlipped(prev => {
                        const newFlipped = [...prev];
                        newFlipped[card1Index] = false;
                        newFlipped[card2Index] = false;
                        return newFlipped;
                    });
                    setCard1(0);
                    setCard2(0);
                    setCount(0);
                    setIsWaiting(false);
                }, 500);
            }
        }
    },[card1,card2])


    if(win) {
        return <h1>YOU WIN, and in "only" {numTurns} turns!</h1>
    }
    else {
        return (
            <div className={styles.board}>
                {shuffledDeck.map((eachCard, index) => (
                    <Card key={index} eachCard={eachCard} index={index}
                    currentCard1={card1} onCard1Change={handleCard1}
                    currentCard2={card2} onCard2Change={handleCard2}
                    currentCount={count} onCountChange={handleCount}
                    isFlipped={flipped[index]} onFlipChange={(newVal) => { const newFlipped = [...flipped]; newFlipped[index] = newVal; setFlipped(newFlipped); }}
                    isFound={found.includes(index)} isWaiting={isWaiting}/>
                ))}
                <h2>Turns used: {numTurns}</h2>
            </div>
        );
    }
};
