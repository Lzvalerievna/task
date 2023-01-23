import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';

export default function CardList() {
  const [cards, setCards] = useState([]);

  const fetchApi = async(url) => {
    const res = await fetch(url);
    return res.json();
  };

  useEffect(() => {
    fetchApi('https://my-json-server.typicode.com/savayer/demo/posts')
      .then(date => setCards(date));
  },[]);

  const renderCard = cards.map((el) => <Card key={el.id} item={el}/> )

  return <ul>{renderCard}</ul>
  
}
