import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { getAllImages, Image } from '../../api/images';

export interface ImagesState {
  data: Image[];
  status: 'idle' | 'loading' | 'failed';
  selectedImageId: string | null;
  selectedTabId: string | null;
}

const initialState: ImagesState = {
  data: [],
  status: 'idle',
  selectedImageId: null,
  selectedTabId: null
};

export const getImages = createAsyncThunk(
  'images/fetchImages',
  async (undefined, { rejectWithValue }) => {
    try {
      const response = await getAllImages();
      return response.data;
    } catch (error) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue(`Failed to fetch images with error: ${error}`);
    }
  }
);

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  
  reducers: {
    favoriteImage: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex((image) => image.id === action.payload);
      state.data[index].favorited = !state.data[index].favorited ;
    },
    filterFavorited: (state, action: PayloadAction<string>) => {
      state.selectedTabId = action.payload;
    },
    sortByCreatedDate: (state, action: PayloadAction<string>) => {
      state.selectedTabId = action.payload;
    },
    selectImage: (state, action: PayloadAction<string>) => {
      state.selectedImageId = state.selectedImageId === action.payload ?
        null :
        action.payload;
    },
    deleteImage: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(image => image.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(getImages.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { favoriteImage, selectImage, deleteImage, filterFavorited,sortByCreatedDate } = imagesSlice.actions;

export const selectAllImages = (state: RootState) => {
  if (state.images.selectedTabId === "favorites") {
    return state.images.data.filter(image => image.favorited === true)
  } else if (state.images.selectedTabId === "recent") {
    return state.images.data.slice().sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
  }
  return state.images.data;
};
export const selectSelectedImage = (state: RootState) => state.images.data.find(image => image.id === state.images.selectedImageId);
export default imagesSlice.reducer;  