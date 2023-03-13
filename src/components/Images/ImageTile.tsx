import { useCallback } from "react";
import ImageTile from "../../ui/ImageTile";
import { Image } from "../../api/images";
import styled from "styled-components";
import {
  selectImage
} from '../../store/slices/images';
import { useAppDispatch } from '../../store/hooks';

const ImageDescription = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
  }
  p:last-child {
    color: ${props => props.theme.secondary}
  }
`;

type ImageTileComponentProps = { image: Image, selected?: boolean };

const ImageTileComponent = ({ image, selected }: ImageTileComponentProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectImageDispatch = useCallback(() => {
    dispatch(selectImage(image.id))
  }, [image.id, dispatch]);
  return (
    <ImageTile data-testid="imageTile" image={image} selectable={true} selected={selected} width="200px" height="155px" clickHandler={selectImageDispatch}>
      <ImageDescription>
        <p>{image.filename}</p>
        <p>{(image.sizeInBytes/1024/1024).toFixed(2) + ' MB'}</p>
      </ImageDescription>
    </ImageTile>
  )
}

export default ImageTileComponent;