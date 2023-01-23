import React from 'react';
import './Card.css';

export default function Card({item}) {

    const  analyticsTrackClick = (url) => console.log(url);

    return (
        <div className="card">
            <div className="card__title">{item.title.en}</div>
            <div className="card__text">{item.title.en.toLowerCase()} text ...</div>
            <a
                className={`default-link card__link ${item.id === 1 ? 'card__link--red' : ''}`}
                target={item.id === 1 ? '_blank' : ''}
                href={item.link}
                onClick={() => analyticsTrackClick(item.link)}
            >
                {item.link_title}
            </a>
        </div>
    );
}

