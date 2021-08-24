import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private comunidadesURL = 'http://127.0.0.1:8000/regions/comunidadautonoma';
  private restriccionesURL = 'http://127.0.0.1:8000/regions/restricciones';
  private comunidadRestriccionURL = 'http://127.0.0.1:8000/regions/comunidadrestricciones';

  constructor(
    private http: HttpClient
  ) { }

  getComunidades(): Observable<any> {
    return this.http.get<any>(this.comunidadesURL);
  }

  getRestricciones(): Observable<any> {
    return this.http.get<any>(this.restriccionesURL);
  }

  getComunidadRestriccion(): Observable<any> {
    return this.http.get<any>(this.comunidadRestriccionURL);
  }
}
