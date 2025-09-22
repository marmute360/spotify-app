import { IArtist } from "./artist.interface";

export interface IAlbum {
    id: string;
    name: string;
    release_date: string;
    album_type: string;
    images: IImage[];
    tracks: any;
    total_tracks: number;
    external_urls: IExternal;
    artists: IArtist[];
}

export interface IImage {
    height: number;
    url: string;
    width: number;
}

export interface IExternal {
    spotify: string;
}