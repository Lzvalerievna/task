import classes from './ButtonsContent.module.scss';

function ButtonsContent({battonMain, buttonMainChange}) {

    const buttons = [
        {id: 1, firstLine:'мы', secondLine: 1, thirdLine: 'на рынке'},
        {id: 2, firstLine:'гарантируем', secondLine: "50%", thirdLine: 'безопасность'},
        {id: 3, firstLine:'календарик за', secondLine: 2001, year: 'г.',thirdLine: 'в подарок'},
        {id: 4, firstLine:'путешествие', secondLine: 597, thirdLine: 'дней'},
    ];

    const ButtonRender = buttons.map(({id, firstLine, secondLine, thirdLine, year}) =>  {

        const isActive = battonMain === id;
        const classActive = isActive ? "selected" : 'unselected';
        return (
          <li key = {id}>
              <button className={classes[`${classActive}${id}`]} onClick={() => buttonMainChange(id)} type="button">
                    <span className={classes.FirstLine}>{firstLine}</span>
                    { id === 3 ? <span className={classes.SecondLine}>{secondLine} <span className={classes.Year}>{year}</span></span> :
                        <span className={classes.SecondLine}>{secondLine}</span>}
                    <span className={classes.ThirdLine}>{thirdLine}</span>
              </button>
          </li>
        )
      });


      return (
        <ul className={classes.MainList}>
          {ButtonRender}
        </ul>
      )
}

export default ButtonsContent;