import React, { useState } from 'react';
import {data} from '../../data.js'
import Card from '../Card/Card';
import styles from './listOfCards.module.css';



function CatalogOfCards() {
    const [selected, setSelectedCard] = useState(3);

    const handleCardClick = (id) => {
        setSelectedCard(id);
    }

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
                            isSelected={selected === card.id}
                            onClick={() => handleCardClick(card.id)}
                        />
                    ))
                }
            </div>
    );
}


export default CatalogOfCards;