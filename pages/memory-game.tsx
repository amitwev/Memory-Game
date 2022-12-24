import React, { useState } from 'react'
import Button from '../Components/Button/Button'
import styles from '../styles/Memory-game.module.css';
const clearBoard = () => {
    console.log('clear button clicked');
}

const startGame = () => {
    console.log('Start game btn');
}

const board = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const MemoryGame = () => {
    const [result, setResult] = useState(0);
    const [cardOne, setCardOne] = useState<{ target: HTMLInputElement | null, value: number }>({ target: null, value: -1 });
    const [cardTwo, setCardTwo] = useState<{ target: HTMLInputElement | null, value: number }>({ target: null, value: -1 });

    const setVisibleCard = (card: HTMLInputElement | null) => {
        card ? card.classList.add('game-card-visible') : null;
    }


    const setDefaultValues = (first: HTMLInputElement | null, second: HTMLInputElement | null) => {
        setCardOne({ target: null, value: -1 });
        setCardTwo({ target: null, value: -1 });
    }

    const setHiddenCard = (card: HTMLInputElement | null) => {
        card ? card.classList.remove('game-card-visible') : null;
    }

    const foundCards = (target: HTMLInputElement) => {
        setDefaultValues(cardOne.target, target);
        setResult(result + 10);
        setVisibleCard(cardOne.target);
        setVisibleCard(target)
    }

    const handleSecondCard = (target: HTMLInputElement) => {
        setVisibleCard(target)
            setTimeout(() => {
                setHiddenCard(cardOne.target);
                setHiddenCard(target);
            }, 500);
        setDefaultValues(cardOne.target, target);
    }

    const handleFirstCard = (target: HTMLInputElement) => {
        setVisibleCard(target);
        setCardOne({ target: target, value: +target.value });
    }

    const checkCardsValue = (target: HTMLInputElement) => {
        if (cardOne.value !== -1) {
            if (cardOne.value === +target.value) {
                return foundCards(target);
            }
            return handleSecondCard(target);
        }
        return handleFirstCard(target);
    }
    const cardClicked = (event: PointerEvent) => {
        //check the cards value
        const target = event.target as HTMLInputElement;
        debugger;
        checkCardsValue(target);
    }

    return (
        <main>
            {/* <div className='heart'></div> */}
            <h1 className={styles.header}>Memory game</h1>
            <div className={styles["game-board"]}>
                {
                    board.map((item, i) => {
                        return (<Button value={item.toString()} text={item.toString()} classes={styles['game-card-hidden']} clicked={(event: PointerEvent) => cardClicked(event)} key={i} />)

                    })
                }
            </div>
            <div className={styles.result}>
                <span className='label'>Result: </span>
                <span id={'score'} className='score'>{result}</span>
            </div>
            <div className={styles.cta}>
                <Button text={"Clear"} id={'clear'} classes={'btn clear-btn'} clicked={clearBoard} attributes={[{ key: 'attributeKey', value: 'attributeValue' }]} />
                <Button text={"Start"} id={'start'} classes={'btn start-btn'} clicked={startGame} />
            </div>
        </main>
    )
}

export default MemoryGame