import Card from "./Card";
import React, { useContext } from 'react';
import CardsContext from './CardContext';

function Cards() {
    const { data } = useContext(CardsContext);
    
    return (
        <div className="container flexbox">
            {data.img.map((imgSrc, index) => (
                <Card 
                    key={index} 
                    src={imgSrc} 
                    promo={index % 2 === 0 ? data.discount1 : data.discount2} 
                    addToCart={data.addToCart} 
                />
            ))}
        </div>
    );
}

export default Cards;
