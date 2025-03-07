import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl = environment.api;

  constructor(
    private http : HttpClient,
    private coockieService: CookieService
  ) {}

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProduct(id: string) {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }

  addProduct(product: any) {
    return this.http.post(`${this.apiUrl}/products`, product);
  }

  updateProduct(id: string, product: any) {
    return this.http.put(`${this.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }

  getProductByCategory(category: string) {
    return this.http.get(`${this.apiUrl}/products/category/${category}`);
  }

  
}
