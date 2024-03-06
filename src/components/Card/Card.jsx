import React, { useState } from 'react';
import styles from './card.module.css'



function Card({name, price, speed, volume, nameColor, priceColor}) {
    const [isClicked, setIsClicked] = useState(false);
    const nameStyle = {
        backgroundColor: nameColor
    }

    const priceStyle = {
        backgroundColor: priceColor
    }

    const selectedCard = {
    transform: isClicked ? 'scale(1.1)' : 'none',
    padding: isClicked ? '0px 4px' : '0',
    };

const handleClick = () => {
    setIsClicked(!isClicked);
    };

    

    return (
        <div className={styles.card} onClick={handleClick} style={selectedCard}>
            <div className={styles.name} style={nameStyle}>{name}</div>
            <div className={styles.price} style={priceStyle}>
                <div className={styles.rub}>
                    руб
                </div>
                <div> 
                    {price} 
                </div>
                <div className={styles.month}> 
                    /мес
                </div>
            </div>
            <div className={styles.speed}>{`До ${speed} Мбит/сек`}</div>
            <div className={styles.volume}>{volume}</div>
        </div >
    );
}

export default Card;