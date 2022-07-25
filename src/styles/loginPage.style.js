import styled from "styled-components";
import heroImageSmall from "../assets/images/hero_girl_small.png";
import heroImageMedium from "../assets/images/hero_girl_medium.png";
import backHero from "../assets/images/back_hero.png";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding-block: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: $neutrals;
    .header__logo {
    }
    .header__info {
      display: flex;
      column-gap: 23px;
      align-items: center;
      .header__number {
        display: none;
      }
      .header__question {
        display: none;
      }
      @media (min-width: 768px) {
        .header__question {
          display: block;
        }
        .header__text {
          display: none;
        }
        .header__number {
          display: block;
        }
      }
    }
  }
`;

export const HeroContainer = styled.div`
  padding-block-end: 56px;
  position: relative;
  background-image: url(${heroImageSmall});
  background-position: right;
  background-repeat: no-repeat;
  height: 250px;
  .heroContainer {
    img {
      position: absolute;
      right: 0;
      top: 0;
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }

  .heroContainer__info {
    width: 230px;
    display: flex;
    flex-direction: column;
    font-family: "Lato";
    h1 {
      margin: 0;
      margin-block-end: 12px;
      span {
        display: block;
      }
    }
    .text {
      color: var(--gray100);
      margin: 0;
    }
  }
  @media (min-width: 768px) {
    background-image: url(${heroImageMedium});
    background-position: center 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .heroContainer__info {
      width: 320px;
      padding-block-start: 100px;
      h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
      }
    }
  }
`;

export const FormLoginContainer = styled.form`
  margin-block: 40px;
  .wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .text_underline {
    text-decoration: underline;
  }
  .terms {
    display: flex;
    align-items: center;
    column-gap: 12px;
    .boxCheck {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 4px;
      height: 20px;
      padding: 5.75px 4.75px;
      background-color: var(--green);
      i {
        font-size: 0.75rem;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-block-start: 150px;
    height: 90%;
    .wrapper {
      width: 300px;
    }
  }
`;

export const InputWithSelectContainer = styled.div`
  display: flex;
  border: 1px solid #c5cbe0;
  border-radius: 4px;
  .select {
    padding: 1rem;
    border-right: 1px solid #c5cbe0;
    span {
      margin-inline-end: 1rem;
      height: inherit;
    }
    &__value {
      display: flex;
      padding-inline: 1rem;
      input {
        width: 100%;
        border: none;
        outline: none;
      }
    }
  }
`;

export const InputFormContainer = styled.div`
  border-radius: 4px;
  input {
    padding: 1rem;
    border: none;
    display: block;
    width: 100%;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 16px 32px;
  background-color: var(--red_primary);
  border: none;
  font-family: "Lato";
  font-style: normal;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
  /* identical to box height, or 114% */

  text-align: center;
  letter-spacing: 0.8px;
  border-radius: 8px;
  a {
    color: white;
  }

  p {
  }
`;

export const LoginPageGrid = styled.div`
  display: flex;
  flex-direction: column;
  .bg-neutrals {
    background-color: var(--neutrals);
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* grid-template-rows: 100vh; */
    .bg-neutrals {
      background-image: url(${backHero});
      background-repeat: no-repeat;
      background-size: cover;
      /* height: 100vh; */
    }
    .leftColumn {
      grid-column: 1/6;
      grid-row: 1/-1;
    }
    .rightColumn {
      grid-column: 6/-1;
      grid-row: 1/-1;
    }
    /* .h-100 {
      height: 100vh;
    } */
    .header {
      position: absolute;
      left: 0;
      right: 0;
      padding-inline: 2rem;
    }
  }
`;
