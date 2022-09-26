import * as C from "./style";
import { useSwitchedContext } from "../../contexts/switchTheme";
import { cardsList } from "./cardsList";

export const CardsTop = () => {
  const { isSwitch } = useSwitchedContext();

  return (
    <C.CardsTop isSwitch={isSwitch}>
      {cardsList.map((e) => (
        <div className="cardsTop__box" key={e.id}>
          <div className="cardsTop__item">
            <img src={e.social} alt={e.alt} />
            <p>{e.user}</p>
          </div>
          <div className="cardsTop__followers">
            <h3>{e.followersNumber}</h3>
            <p>{e.followersString}</p>
          </div>
          <div className="cardsTop__today">
            <img src={e.caret} alt="caret-item" />
            <p>{e.today}</p>
          </div>
        </div>
      ))}
    </C.CardsTop>
  );
};
