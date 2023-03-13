import axios, { AxiosResponse } from "axios";

type Dimensions = {
  height: number,
  width: number
}

export type Image = {
  id: string,
  url: string,
  filename: string,
  description: string,
  uploadedBy: string,
  createdAt: string,
  updatedAt: string,
  dimensions: Dimensions,
  resolution: Dimensions,
  sizeInBytes: number,
  sharedWith: string[],
  favorited: boolean
}

export const getAllImages = (): Promise<AxiosResponse<Image[]>> => 
  axios.get<Image[]>('https://agencyanalytics-api.vercel.app/images.json');