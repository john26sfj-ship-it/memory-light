import ShuffleDeck from "./ShuffleDeck";

export default function NewGame() {
    const initialDeck = Array.from({ length: 8}, (_, i) => i+1).flatMap(i => [i, i]);
    const deckCopy = [...initialDeck];
    const shuffledDeck = ShuffleDeck(deckCopy);

    return(
        <>
            <h2>NewGame initialDeck: {initialDeck}</h2>
            <h2>NewGame shuffledDeck: {shuffledDeck}</h2>
        </>
    )
}