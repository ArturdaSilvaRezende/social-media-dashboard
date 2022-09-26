import * as C from "./style";
import { useSwitchedContext } from "../../contexts/switchTheme";
import { cardsListOverview } from "./cardsList";

export const CardsOverview = () => {
  const { isSwitch } = useSwitchedContext();

  return (
    <C.CardsOverview isSwitch={isSwitch}>
      <h2>Overview - Today</h2>
      <div className="cardsOverview__container">
        {cardsListOverview.map((e) => (
          <div className="cardsOverview__box" key={e.id}>
            <div className="cardsOverview__title">
              <p>{e.description}</p>
              <img src={e.icon} alt={e.alt} />
            </div>

            <div className="cardsOverview__description">
              <p>{e.descriptionNumber}</p>
              <p>
                <span>
                  <img src={e.caret} alt="caret-icon" />
                </span>
                <span>{e.percentage}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </C.CardsOverview>
  );
};
