import React from 'react';
import styles from './card.module.css'



function Card({name, price, speed, volume, nameColor, priceColor, isSelected, onClick}) {
    const nameStyle = {
        backgroundColor: nameColor
    }

    const priceStyle = {
        backgroundColor: priceColor
    }

    return (
        <div className={`${styles.card} ${(isSelected ? styles.selected : "")}`} onClick={onClick} >
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