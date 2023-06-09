import ImageTile from "../ui/ImageTile";

const image = {
  "id": "74957345-6f5b-4d66-ae9d-5d0071b40279",
  "url": "https://agencyanalytics-api.vercel.app/images/0.jpg",
  "filename": "tennessee_female_rubber.jpg",
  "description": "Laboriosam eligendi inventore officia nemo. Quisquam explicabo voluptatem. Illo laborum facilis.",
  "uploadedBy": "Ms. Jimmie Cole",
  "createdAt": "2017-07-15T08:23:20.462Z",
  "updatedAt": "2022-12-16T12:41:33.736Z",
  "dimensions": {
    "height": 4800,
    "width": 3200
  },
  "resolution": {
    "height": 72,
    "width": 72
  },
  "sizeInBytes": 4812732,
  "sharedWith": [],
  "favorited": true
};

export const ImageTileStory = () => 
  <ImageTile image={image} width="300px" height="170px" >
    <h3>Title</h3>
    <p>Description text</p>
  </ImageTile>;

export default {
  title: 'ImageTile',
  component: ImageTileStory,
};