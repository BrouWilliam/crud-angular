import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PeriodicElement } from "../models/PeriodicElement";

@Injectable()
export class PeriodicElementService{
  elementApiUrl = 'https://626aa15d7f8c1826c3b9ef37.mockapi.io/api/periodicElement/ElementsPeriodic'
  constructor(private http: HttpClient){}

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementApiUrl)
  }

  createElement(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(this.elementApiUrl, element)
  }

  editElement(id: number, element: PeriodicElement): Observable<PeriodicElement>{
    return this.http.put<PeriodicElement>(`${this.elementApiUrl}/${id}`, element)
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}/${id}`)
  }
}
