import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  shape(inputshape:any,inputColor:any){
    return inputshape+'-'+inputColor;
  }
}
