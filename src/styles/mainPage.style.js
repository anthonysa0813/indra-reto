import styled from "styled-components";

export const MainPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  header {
    grid-column: 1/-1;
    border-bottom: 1px solid var(--neutrals);
  }
  aside {
    grid-column: 1/-1;
    grid-row: 2/-1;
    border-right: 1px solid var(--neutrals);
    background-color: white;
  }

  @media (min-width: 768px) {
    aside {
      grid-column: 1/4;
      background-color: var(--neutrals);
    }
  }
`;

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-start: 50px;
  .menu {
  }
  .menu__small {
    width: 100%;

    .boxBack {
      width: 24px;
      height: 24px;
      border: 1px solid var(--neutrals);
    }
  }
  .menu__medium {
    display: block;
  }

  .menu__item {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    height: 24px;
    a {
      text-decoration: none;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid var(--gray400);
      color: var(--gray400);
    }
  }
  .menu__separate {
    height: 24px;
    width: 1px;
    border: 1px solid var(--gray400);
    margin-left: 0.65rem;
  }
  @media (min-width: 768px) {
    .menu__small {
      display: none;
    }
  }
`;

export const MainContent = styled.main`
  padding-block-start: 48px;
  /* padding-inline: 1rem; */
  grid-column: 1/-1;
  .field {
    .backNavigation {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      p {
        margin: 0;
      }
      .circle {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid var(--red100);
        color: var(--red100);
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 0.5rem;
        }
      }
    }
  }
  .welcome {
    span {
    }
  }
  .stats__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 96px;
    padding-block-start: 44px;
    .stats__info {
      grid-column: 1/-1;
      .separate {
        margin-block-start: 43px;
        border: 1px solid var(--neutrals200);
      }
      @media (min-width: 768px) {
        grid-column: 1/3;
        display: block;
      }
    }
    .stats__offer {
      grid-column: 3/-1;
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  @media (min-width: 768px) {
    grid-column: 4/-1;
    padding-inline: 96px;
  }
`;

export const CardOfferContainer = styled.div`
  width: 224px;
  span {
    display: block;
    margin-block-start: 10px;
    margin-block-end: 4px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    /* identical to box height, or 129% */

    letter-spacing: -0.2px;

    /* Gray_1_Títulos */

    color: #494f66;
  }
  hr {
    color: #e4e8f7;
    margin-block: 19px 24px;
  }
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    li {
      display: flex;
      column-gap: 1rem;
    }
  }
`;

export const PlacaCardContainer = styled.div`
  padding: 40px 32px 56px;
  border: 3px solid var(--neutrals200);
  border-radius: 12px;
  position: relative;
  column-gap: 35px;
  h1 {
    /* display: inline;  */
  }
  img {
    position: absolute;
    top: -10px;
    right: 40px;
    bottom: 0;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 60px;

  .account__product {
    padding: 16px 40px;
    border: 1px solid #c5cbe0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 11px;
    .font16 {
      font-size: 2rem;
    }
  }
`;

export const OptionsMenuContainer = styled.div`
  margin-block-start: 55px;
  .menuOptions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: white;
    column-gap: 1rem;

    border-bottom: 1px solid var(--neutrals);
    a {
      text-decoration: none;
    }
    a:nth-child(1) {
      color: red;
      border-bottom: 2px solid var(--red100);
      padding-block-end: 2rem;
    }
    .active {
      background-color: white;
      color: black;
    }
  }
`;

export const ListOptionContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  margin-block: 2rem;
  column-gap: 1rem;
  align-items: center;

  p {
    color: #676f8f;
    transition: all 0.3s ease;
  }
  i {
  }
  h5 {
    margin: 0;
    margin-block-end: 0.5rem;
  }

  .actionBox {
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    color: var(--blue_berry);
  }
  .addActive__box {
    width: 24px;
    height: 24px;
    border: 1px solid var(--gray400);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--blue_berry);
  }
`;
