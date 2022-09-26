import styled from "styled-components";

type Props = {
  isSwitch: boolean;
};

export const CardsSection = styled.section``;

export const CardsTop = styled.div<Props>`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  .cardsTop__box {
    background-color: ${(props) =>
      props.isSwitch === false
        ? "var(--Dark-Desaturated-Blue)"
        : "var(--Light-Grayish-Blue)"};
    position: relative;
    top: -100px;
    width: 100%;
    padding: 25px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.isSwitch === false
          ? "var(--Dark-Desaturated-Blue-hover)"
          : "var(--Light-Grayish-Blue-hover)"};
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:nth-child(1) {
      border-top: 5px solid var(--Facebook);
    }

    &:nth-child(2) {
      border-top: 5px solid var(--Twitter);
    }

    &:nth-child(3) {
      position: relative;

      &:after {
        border-radius: 6px;
        background-image: linear-gradient(
          to right,
          hsl(37, 97%, 70%),
          hsl(329, 70%, 58%)
        );
        content: "";
        position: absolute;
        inset: 0;
        border-top: 5px solid transparent;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        mask-composite: destination-out;
        mask-composite: exclude;
      }
    }

    &:nth-child(4) {
      border-top: 5px solid var(--YouTube);

      .cardsTop__today {
        p {
          color: var(--Bright-Red);
        }
      }
    }

    .cardsTop__item {
      img {
        margin-right: 10px;
      }

      p {
        font-weight: 700;
        color: ${(props) =>
          props.isSwitch === false
            ? "var(--Desaturated-Blue)"
            : "var(--Dark-Grayish-Blue)"};
      }
    }

    .cardsTop__followers {
      flex-direction: column;
      text-align: center;
      margin: 20px 0;

      h3 {
        font-size: 2.7rem;
        color: var(--White);
        color: ${(props) =>
          props.isSwitch === false ? "var(--White)" : "var(--Very-Dark-Blue)"};
      }

      p {
        color: var(--Desaturated-Blue);
        color: ${(props) =>
          props.isSwitch === false
            ? "var(--Desaturated-Blue)"
            : "var(--Dark-Grayish-Blue)"};
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-top: 5px;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }

    .cardsTop__today {
      img {
        margin-right: 5px;
      }
      p {
        color: var(--Lime-Green);
        font-weight: 700;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
    gap: 20px;

    .cardsTop__box {
      .cardsTop__followers {
        h3 {
          font-size: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
    width: 90%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    grid-template-columns: 47% 47%;
  }

  @media screen and (max-width: 599px) {
    .cardsTop__box {
      top: -25px;
    }
  }
`;

export const CardsOverview = styled.div<Props>`
  max-width: 960px;
  margin: -40px auto 0 auto;

  h2 {
    font-size: 1.4rem;
    color: ${(props) =>
      props.isSwitch === false ? "var(--White)" : "var(--Dark-Grayish-Blue)"};
    margin-bottom: 10px;
  }

  .cardsOverview__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .cardsOverview__box {
      background-color: ${(props) =>
        props.isSwitch === false
          ? "var(--Dark-Desaturated-Blue)"
          : "var(--Light-Grayish-Blue)"};

      width: 24%;
      margin-top: 20px;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        background-color: ${(props) =>
          props.isSwitch === false
            ? "var(--Dark-Desaturated-Blue-hover)"
            : "var(--Light-Grayish-Blue-hover)"};
      }

      &:nth-child(2),
      &:nth-child(7),
      &:nth-child(8) {
        .cardsOverview__description {
          p {
            &:last-child {
              color: var(--Bright-Red);
            }
          }
        }
      }

      .cardsOverview__title {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        padding: 0 25px;

        p {
          font-weight: 700;
          color: ${(props) =>
            props.isSwitch === false
              ? "var(--Desaturated-Blue)"
              : "var(--Dark-Grayish-Blue)"};
        }
      }

      .cardsOverview__description {
        display: flex;
        justify-content: space-between;
        padding: 0 25px;
        margin-bottom: 20px;

        p {
          &:first-child {
            font-weight: 700;
            font-size: 1.6rem;

            color: ${(props) =>
              props.isSwitch === false
                ? "var(--White)"
                : "var(--Very-Dark-Blue)"};
          }

          &:last-child {
            display: flex;
            align-items: center;
            font-weight: 700;
            color: var(--Lime-Green);

            span {
              &:first-child {
                margin-right: 4px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .cardsOverview__container {
      .cardsOverview__box {
        width: 47%;
      }
    }
  }

  @media screen and (max-width: 599px) {
    margin: 30px auto 0 auto;

    .cardsOverview__container {
      .cardsOverview__box {
        width: 100%;
      }
    }
  }
`;
