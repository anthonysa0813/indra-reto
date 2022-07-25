import styled from "styled-components";
import heroSmall from "../assets/images/hero__small-small.png";

export const SuccessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 400px auto;

  border-top: 1px solid var(--neutrals200);

  .success__grid-animation {
    grid-column: 1/-1;
    grid-row: 1/-1;
    height: 400px;
    background-image: url(${heroSmall});
    /* background-position: center; */
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .imageSmall {
      display: block;
      position: absolute;
      bottom: 0;
      left: calc(50% - 50px);
      height: 200px;
    }
    img {
      display: none;
    }
    @media (min-width: 768px) {
      grid-column: 1/5;
      height: 250px;
      img {
        display: block;
      }
      background-image: none;
      .imageSmall {
        display: none;
      }
    }
  }
  .success__grid-info {
    grid-column: 1/-1;
    grid-row: 2/-1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: 1rem;
    padding-block-start: 45px;
    h1 {
      span {
        display: block;
      }
      margin-block-end: 1rem;
    }
    .wrapper {
      padding-inline: 1rem;
      width: 480px;
      padding-block-start: 45px;
    }
  }
  button {
    width: 100%;
    margin-block-start: 40px;
  }
  @media (min-width: 768px) {
    grid-template-rows: calc(100vh - 80px);
    .success__grid-info {
      grid-column: 5/-1;
      grid-row: 1/-1;
      button {
        width: 50%;
      }
    }
  }
`;
