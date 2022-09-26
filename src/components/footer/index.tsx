import * as C from "./style";
import { useSwitchedContext } from "../../contexts/switchTheme";

export const Footer = () => {
  const { isSwitch } = useSwitchedContext();

  return (
    <C.Footer isSwitch={isSwitch}>
      <div className="attribution">
        <span>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor{" "}
          </a>
          Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende"
            target="_blank"
            rel="noreferrer"
          >
            Artur da Silva Rezende
          </a>
        </span>
      </div>
    </C.Footer>
  );
};
