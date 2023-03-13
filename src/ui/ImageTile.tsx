import { MouseEventHandler } from "react";
import styled from "styled-components";
import { Image } from "../api/images";

const ImageContainer = styled.div.attrs((props: {width: string}) => props)`
  margin-top: ${props => props.theme.indent};
  width: ${props => props.width};

  @media only screen and (max-width: 870px) { 
    width: 320px;
  }
  @media only screen and (max-width: 768px) { 
    width: 100%;
    height: 300px;
  }
`;

const ImageWrapper = styled.div.attrs((props: {height: string}) => props)`
  overflow: hidden;
  width: 100%;
  height: ${props => props.height};
  border-radius: 10px;
  img {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: auto;
  }
  &.selected {
    border: 2px solid #fff;
    outline: 2px solid ${props => props.theme.accent};
    border-radius: 10px;
  }
  &:hover {
    cursor: pointer;
  };
  @media only screen and (max-width: 870px) { 
    height: 255px;
  }
  @media only screen and (max-width: 768px) { 
    width: 100%;
    height: 100%;
  }
`;

const ImageTile = (
  { image, selectable = false, selected = false, height, width, clickHandler, children }:
  { image: Image, selectable?: boolean, selected?: boolean, height: string, width: string, clickHandler?: MouseEventHandler, children?: React.ReactNode }): JSX.Element => {
  return (
    <ImageContainer width={width} onClick={clickHandler}>
      <ImageWrapper className={selectable && selected ? 'selected' : ''} height={height}>
        <img src={image.url} alt={image.description} />
      </ImageWrapper>
      {children}
    </ImageContainer>
  )
}

export default ImageTile;