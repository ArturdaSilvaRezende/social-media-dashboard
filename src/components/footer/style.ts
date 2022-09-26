import styled from "styled-components";

type Props = {
  isSwitch: boolean;
};

export const Footer = styled.footer<Props>`
  max-width: 960px;
  margin: 50px auto 50px auto;

  .attribution {
    text-align: center;

    span {
      color: ${(props) =>
        props.isSwitch === false ? "var(--White)" : "var(--Desaturated-Blue)"};

      font-weight: 700;

      a {
        color: var(--Dark-Grayish-Blue);

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;
