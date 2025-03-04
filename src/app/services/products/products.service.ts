import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
// import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl = environment.api;

  constructor(
    private http : HttpClient,
    // private coockieService: CookieService
  ) {}
}
