import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/productos';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RopaService {
  private _endPoint: string = environment.endPoint;
  private _apiURL: string = this._endPoint + 'Ropas/';
  constructor(private http: HttpClient) {}

  getList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this._apiURL}ListaRopa`);
  }
}
