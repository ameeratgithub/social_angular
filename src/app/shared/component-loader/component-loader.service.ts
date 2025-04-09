import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  loading: boolean;
  constructor() { }
  loader(observable: Observable<any>, callback: Function) {
    this.loading = true;
    observable.subscribe(res => {
      callback(res);
      this.loading = false;
    });
  }
}
