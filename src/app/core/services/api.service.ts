import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsDTO } from '../models/products';
import { UserDTO } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private basePath = environment.api;

  constructor(private http: HttpClient) {}

  postUser(data: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.basePath}/user`, data);
  }

  getProducts(): Observable<ProductsDTO[]> {
    return this.http.get<ProductsDTO[]>(`${this.basePath}/products`);
  }
}
