import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(protected http: HttpClient) { }

  getAll(URL: any) {
    return this.http.get<any>(URL);
  }

}











