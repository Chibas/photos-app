import styled from "styled-components";

const Container = styled.div`
  margin: 0 ${ props => props.theme.indent };
  display: grid;
  grid-gap: 0 ${ props => props.theme.indent };
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "header aside"
    "main aside";

  @media only screen and (max-width: 1000px) { 
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-gap: 15px;
  }
`;

export default Container;