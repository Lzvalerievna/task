
import React, {useState} from 'react';
import classes from './App.module.scss';
import ButtonsNav from '../ButtonNav/ButtonsNav';
import ButtonsContent from '../ButtonsContent/ButtonsContent';

function App() {
  
  const [battonNavActive, setButtonNavActive] = useState("Технология");
  const [battonMain, setButtonMain] = useState(1);

  const buttonNavChange = (battonNavActive) => {
    setButtonNavActive(battonNavActive);
  };

  const buttonMainChange = (id) => {
    setButtonMain(id);
  };

  return (
    <div className ={classes.App}>
      <div className ={classes.AppHeader}>
        <div className={classes.AppHeaderLogo}><image className={classes.ImageLogo} alt ='logo'></image></div>
        <ButtonsNav buttonNavChange={buttonNavChange} battonNavActive={battonNavActive}/>
      </div>
      <div className={classes.ContentMain}>
        <div className={classes.ContentName}>
          <h1>ПУТЕШЕСТВИ
          <span>на красную планету</span>
          </h1>
          <p>Начать путешествие</p>
        </div>
        <ButtonsContent battonMain={battonMain} buttonMainChange={buttonMainChange}/>
      </div>
    </div>
  );
}

export default App;
