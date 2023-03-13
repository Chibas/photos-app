import { useCallback } from "react";
import { Image } from "../../api/images";
import ImageTile from "../../ui/ImageTile";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useAppDispatch } from "../../store/hooks";
import { deleteImage, favoriteImage } from "../../store/slices/images";

const SidebarContainer = styled.div`
  width: 400px;
  padding: ${ props => props.theme.indent };
  border-left: 1px solid ${ props => props.theme.borders };
  @media only screen and (max-width: 870px) { 
    max-width: 100%;
    width: unset;
    padding: 0 0 0 30px;
  }
  
`;

const ImageTileDescription = styled.div`
  .top {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    margin-top: 15px;
  }
  img {
    width: 16px;
    height: 16px;
  }
  img:hover {
    cursor: pointer;
  }
  h3  {
    font-size: 22px;
    font-weight: 600;
    margin: 0px;
  }
  p {
    color: ${props => props.theme.secondary};
    margin-top: 5px;
  }
`;

const ImageDescription = styled.div`
  width: 100%;
  h3 {
    margin-top: ${props => props.theme.indent};
    font-weight: 500;
    margin-bottom: ${props => props.theme.indent};
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    color: ${props => props.theme.secondary};
    border: red
    font-size: 14px;
    line-height: 1.4;
  }
`;

const ImageDescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  span {
    font-size: 14px;
    font-weight: 600;
  }
  span:first-child {
    color: ${props => props.theme.secondary}
  }
  border-bottom: 1px solid ${props => props.theme.borders}
`;


const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
const datePipe = (dateString: string): string => new Date(dateString).toLocaleDateString('en-US', options)

type SidebarProps = { image: Image, favorited: boolean };

const Sidebar = ({ image, favorited } : SidebarProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const deleteHandler = useCallback(() => {
    dispatch(deleteImage(image.id));
  }, [image.id, dispatch]);
  const favoriteHandler = useCallback(() => {
    dispatch(favoriteImage(image.id));
  }, [image.id, dispatch]);
  let imageLink = favorited ? '/like.png' : '/heart.png';

  return (
    <SidebarContainer>
      <ImageTile image={image} height="270px" width="100%">
        <ImageTileDescription>
          <div className="top">
            <h3>{image.filename}</h3>
            <img src={process.env.PUBLIC_URL + imageLink} alt="favorite" onClick={favoriteHandler}/> 
          </div>
          <div className="bottom">
            <p>{(image.sizeInBytes/1024/1024).toFixed(2) + ' MB'}</p>
          </div>
        </ImageTileDescription>
      </ImageTile>
      <ImageDescription>
        <ImageDescriptionRow>
         <h3>Information</h3>
        </ImageDescriptionRow>
        <ImageDescriptionRow>
          <span>Uploaded by</span>
          <span>{image.uploadedBy}</span>
        </ImageDescriptionRow>
        <ImageDescriptionRow>
          <span>Created</span>
          <span>{datePipe(image.createdAt)}</span>
        </ImageDescriptionRow>
        <ImageDescriptionRow>
          <span>Last modified</span>
          <span>{datePipe(image.updatedAt)}</span>
        </ImageDescriptionRow>
        <ImageDescriptionRow>
          <span>Dimensions</span>
          <span>{image.dimensions.width} x {image.dimensions.height}</span>
        </ImageDescriptionRow>
        <ImageDescriptionRow>
          <span>Resolution</span>
          <span>{image.resolution.width} x {image.resolution.height}</span>
        </ImageDescriptionRow>
        <h3>Description</h3>
        <p>{image.description}</p>
      </ImageDescription>
      <Button title="Delete" clickHandler={deleteHandler} />
    </SidebarContainer>
  )
}

export default Sidebar; 