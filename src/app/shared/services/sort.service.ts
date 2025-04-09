import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }
  sortObservables(collection: Observable<any>, sortBy: string, order: string): Observable<any> {
    sortBy = sortBy.toLowerCase();
    order = order || 'asc';
    return collection.pipe(
      map((c: any[]) => {
        c.sort((a, b) => {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        });
        return order === 'asc' ? c : c.reverse();
      })
    );
  }
  sort(collection: any, sortBy: string, order: string): Observable<any> {
    return this.sortObservables(of(collection), sortBy, order).pipe(map(() => timer(2000)));
  }
}
