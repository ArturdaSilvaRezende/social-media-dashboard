import * as C from "./style";
import { CardsTop } from "./cardsTop";
import { CardsOverview } from "./cardsOverview";

export const CardsSection = () => {
  return (
    <C.CardsSection>
      <CardsTop />
      <CardsOverview />
    </C.CardsSection>
  );
};
