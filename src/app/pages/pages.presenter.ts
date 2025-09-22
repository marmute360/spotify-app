import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IArtist } from "../interfaces/artist.interface";
import { IAlbum } from "../interfaces/album.interface";

@Injectable()
export class PagesPresenter {
    constructor() {}
   
    private _loadingSubject = new BehaviorSubject<boolean>(false);

    public readonly loadingSubject$: Observable<any> = this._loadingSubject.asObservable();
    

    setLoadingValue(value: boolean) : void 
    {
        console.log(value)
        this._loadingSubject.next(value)
    }
}