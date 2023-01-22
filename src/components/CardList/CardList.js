import React from 'react';
import Card from '../Card/Card';

function CardList({ analyticsTrackClick, cards}) {
  console.log(2)
  const renderCard = cards.map((el) => <Card key={el.id} item={el} analyticsTrackClick={analyticsTrackClick}/> )

  return (
      <ul>{renderCard}</ul>
  )
}

export default CardList;