import { useEffect } from 'react';
import Container from './ui/Container';
import Tabs from './components/Tabs';
import ImageList from './components/Images/ImageList';
import Sidebar from './components/Sidebar';
import { useAppSelector, useAppDispatch } from './store/hooks';
import {
  getImages,
  selectAllImages,
  selectSelectedImage
} from './store/slices/images';


function App() {
  const imagesList = useAppSelector(selectAllImages);
  const status = useAppSelector((state) => state.images.status);
  const selectedImage = useAppSelector(selectSelectedImage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImages())
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h1>Photos</h1>
        <nav>
          <Tabs />
        </nav>
      </header>
      <main>
        {status !== 'loading' && <ImageList images={imagesList} selectedImageId={selectedImage?.id}/>}
      </main>
      <aside>
        {selectedImage && <Sidebar image={selectedImage} favorited={selectedImage.favorited}/>}
      </aside>
    </Container>
  );
}

export default App;
