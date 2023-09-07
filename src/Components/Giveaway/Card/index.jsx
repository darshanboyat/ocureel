import React from 'react';
import './style.css';

function Card({title, place, head}) {
    return (
        <div className={place%2 ? "giveaway__video" : "giveaway__place__bottom"}>
            <div className='giveaway__card__container'>
                <div className="card">
                    <div className="giveaway__card__content">
                        {head && <h4>{head}</h4>}
                        <p>{title}</p>
                    </div>
                </div>
                <div className="giveaway__shadow"></div>
            </div>  
        </div>
    );
}

export default Card;
