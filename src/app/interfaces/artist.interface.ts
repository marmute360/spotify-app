export interface IArtist {
    id: string;
    name: string;
    followers: IFollowers;
    genres: string[];
    images: IImage[];
}

export interface IFollowers {
    href: string | null;
    total: number;
}

export interface IImage {
    height: number;
    url: string ;
    width: number;
}
