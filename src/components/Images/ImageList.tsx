import styled from "styled-components";
import ImageTile from "./ImageTile";
import { Image } from "../../api/images";

const ImagesListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  @media only screen and (max-width: 768px) { 
    flex-direction: column;
    align-items: stretch;
    gap: 50px;
  }
`;

type ImageListProps = {
  images: Image[],
  selectedImageId?: string
};

const ImageList = ({ images, selectedImageId } : ImageListProps): JSX.Element => {
  return (
    <ImagesListContainer>
      {images.map(image => <ImageTile key={image.id} image={image} selected={image.id === selectedImageId}/> )}
    </ImagesListContainer>
  )
}

export default ImageList;