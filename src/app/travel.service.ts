import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private comunidadesURL = 'http://127.0.0.1:8000/regions/comunidadautonoma';
  private limitrofesURL = 'http://127.0.0.1:8000/regions/limitrofes';
  private restriccionesURL = 'http://127.0.0.1:8000/regions/restricciones';
  private comunidadRestriccionURL = 'http://127.0.0.1:8000/regions/comunidadrestricciones';

  constructor(
    private http: HttpClient
  ) { }

  getComunidades(): Observable<any> {
    return this.http.get<any>(this.comunidadesURL);
  }

  getLimitrofes(): Observable<any> {
    return this.http.get<any>(this.limitrofesURL);
  }

  getRestricciones(): Observable<any> {
    return this.http.get<any>(this.restriccionesURL);
  }

  getComunidadRestriccion(): Observable<any> {
    return this.http.get<any>(this.comunidadRestriccionURL);
  }
}
