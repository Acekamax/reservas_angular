import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private url="http://127.0.0.1:8000/api/clases"

  constructor(private http: HttpClient) { 

  }
  public getClases() {
    return this.http.get(this.url).toPromise();
  }
  

}
