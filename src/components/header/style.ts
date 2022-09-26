import styled from "styled-components";

type Props = {
  isSwitch: boolean;
};

export const Header = styled.header<Props>`
  background-color: ${(props) =>
    props.isSwitch === false
      ? "var(--Very-Dark-Blue-Top)"
      : "var(--Very-Pale-Blue-Top)"};
  height: 220px;
`;

export const Container = styled.div<Props>`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  hgroup {
    h1 {
      font-size: 1.7rem;
      color: ${(props) =>
        props.isSwitch === false ? "var(--White)" : "var(--Very-Dark-Blue)"};
    }

    h2 {
      margin-top: 5px;
      color: ${(props) =>
        props.isSwitch === false
          ? "var(--Desaturated-Blue)"
          : "var(--Dark-Grayish-Blue)"};
    }
  }

  .header__button {
    display: flex;
    align-items: center;

    &:hover {
      .header__button-dark-mode {
        color: ${(props) => (props.isSwitch === false ? "var(--White)" : "")};
      }
    }

    p {
      color: ${(props) =>
        props.isSwitch === false
          ? "var(--Desaturated-Blue)"
          : "var(--Dark-Grayish-Blue)"};
      font-weight: 700;
      margin-right: 20px;
    }

    div {
      width: 60px;
      height: 30px;
      border-radius: 40px;
      position: relative;
      cursor: pointer;

      button {
        background-color: var(--Dark-Desaturated-Blue);
        background-color: ${(props) =>
          props.isSwitch === false
            ? "var(--Dark-Desaturated-Blue)"
            : "var(--White)"};
        border: none;
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translate(33px, -50%);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }

  @media screen and (max-width: 599px) {
    flex-direction: column;

    hgroup {
      h1 {
        font-size: 1.5rem;
      }
      margin-bottom: 22px;
      padding-bottom: 25px;
      border-bottom: 1px solid var(--Very-Dark-Blue);
    }

    div {
      justify-content: space-between;

      p {
        font-size: 1.1rem;
      }
    }
  }
`;
