import classes from './ButtonsNav.module.scss';


function ButtonsNav({battonNavActive, buttonNavChange}) {

  const buttons = [
    {id: 1, name:"Главная"}, 
    {id: 2, name: "Технология"}, 
    {id: 3, name: "График полетов"},
    {id: 4, name: "Гарантии"},
    {id:5, name: "О компании"},
    {id: 6, name: "Контакты"}];


  const ButtonRender = buttons.map(({name, id}) =>  {
    const isActive = battonNavActive === name;
    const classActive = isActive ? "selected" : "";
    return (
      <li key = {id}>
          <button className={classes[`${classActive}`]} onClick={() => buttonNavChange(name)} type="button">
             {name}
          </button>
      </li>
    )
  });

  return (
    <ul className={classes.NavList}>
      {ButtonRender}
    </ul>
  )

}

export default ButtonsNav;