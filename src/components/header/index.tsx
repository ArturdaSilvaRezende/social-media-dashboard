import { MutableRefObject, useCallback } from "react";
import * as C from "./style";
import { useSwitchedContext } from "../../contexts/switchTheme";
import "./animation.css";

export const Header = () => {
  const { isSwitch, setIsSwitch, switchRef } = useSwitchedContext();
  const ref = switchRef as MutableRefObject<HTMLButtonElement>;
  const body = document.querySelector("body") as HTMLElement;

  const switchTheme = useCallback(() => {
    if (!isSwitch) {
      ref.current.classList.remove("header__dark-theme");
      ref.current.classList.add("header__light-theme");
      body.style.backgroundColor = "var(--White)";
      return setIsSwitch(true);
    } else {
      ref.current.classList.remove("header__light-theme");
      ref.current.classList.add("header__dark-theme");
      body.style.backgroundColor = "var(--Bg-Body)";
      return setIsSwitch(false);
    }
  }, [isSwitch, setIsSwitch, ref, body]);

  return (
    <C.Header isSwitch={isSwitch}>
      <C.Container isSwitch={isSwitch}>
        <hgroup>
          <h1>Social Media Dashboard</h1>
          <h2>Total Followers: 23,004</h2>
        </hgroup>
        <div className="header__button">
          <p className="header__button-dark-mode">Dark Mode</p>
          <div
            onClick={switchTheme}
            className={
              isSwitch === false ? "toggleDark" : "toggleLight toggleLightHover"
            }
          >
            <button ref={ref}></button>
          </div>
        </div>
      </C.Container>
    </C.Header>
  );
};
