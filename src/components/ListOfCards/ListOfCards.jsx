import React from 'react';
import Card from '../Card/Card';
import styles from './listOfCards.module.css';

const data = [
    {
        name: "Безлимитный 300",
        price: 300,
        speed: 10,
        volume: "Объем включенного трафика не ограничен",
        nameColor: "rgb(0, 97, 119)",
        priceColor: "rgb(6, 149, 181)"
    },
    {
        name: "Безлимитный 450",
        price: 450,
        speed: 50,
        volume: "Объем включенного трафика не ограничен",
        nameColor: "rgb(20 92 55)",
        priceColor: "rgb(28 140 82)"
    },
    {
        name: "Безлимитный 550",
        price: 550,
        speed: 100,
        volume: "Объем включенного трафика не ограничен",
        nameColor: "rgb(164 30 30)",
        priceColor: "rgb(198 44 44)",
        special: 'scale(1.03)',
        margin: "0px 4px"
    },
    {
        name: "Безлимитный 1000",
        price: 1000,
        speed: 20,
        volume: "Объем включенного трафика не ограничен",
        nameColor: "rgb(24 24 24)",
        priceColor: "rgb(56 55 55)"
    },
]


function CatalogOfCards() {
    return (
            <div className={styles.catalog}>
                {data?.length &&
                    data.map((card) => (
                        < Card
                            key={card.id}
                            name={card.name}
                            price={card.price}
                            speed={card.speed}
                            volume={card.volume}
                            nameColor={card.nameColor}
                            priceColor={card.priceColor}
                            transform={card.special}
                            margin={card.margin}
                        />
                    ))
                }
            </div>
    );
}


export default CatalogOfCards;