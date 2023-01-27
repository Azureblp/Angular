import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  private showLoader$: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor() { }
  getLoaderValue(): Observable<any> {
    return this.showLoader$.asObservable();
  }

  setLoaderValue(value:any) {
    this.showLoader$.next(value);
  }
}
