export enum MediaType {
  CarouselAlbum = "CAROUSEL_ALBUM",
  Image = "IMAGE",
  Video = "VIDEO",
}
export interface DetailedInstagramPost {
  id: string;
  permalink: string;
  caption: string;
  media_url: string;
  media_type: MediaType;
  timestamp: string;
  thumbnail_url?: string;
}

export interface Cursors {
  before: string;
  after: string;
}
export interface Paging {
  cursors: Cursors;
  next: string;
  previous: string;
}

export interface InstagramData {
  data: DetailedInstagramPost[];
  paging: Paging;
}