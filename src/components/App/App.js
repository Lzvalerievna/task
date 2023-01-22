import React, {useState, useEffect} from 'react';
import CardList from '../CardList/CardList';

export default function App() {
  console.log(1)
  const [cards, setCards] = useState([]);

  const fetchApi = async(url) => {
    const res = await fetch(url)
    return res.json()
  }

  function analyticsTrackClick(url) {
    // sending clicked link url to analytics
    console.log(url);
  }
  useEffect(() => {
    fetchApi('https://my-json-server.typicode.com/savayer/demo/posts')
      .then(date => setCards(date))
  },[]);

  return (
    <div>
      <CardList cards={cards} analyticsTrackClick={analyticsTrackClick} />
    </div>
  );
}



