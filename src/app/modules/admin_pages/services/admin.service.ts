import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/modelos/User';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelos/Empleado';
import { Cliente } from 'src/app/modelos/Cliente';
import { Producto } from 'src/app/modelos/Producto';
import { Cotizacion } from 'src/app/modelos/Cotizacion';
import { ProductCot } from 'src/app/modelos/ProductCot';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private datosUsuariosUrl = "Admin/GetUsuarios"
  private datosEmpleadosUrl = "Admin/GetEmpleados"
  private datosClientesUrl = "Admin/GetClientes"
  private datosProductosUrl = "Admin/GetProductos"
  private AddProductoUrl = "Admin/AddProducto"
  private GetCotizaciones = "Admin/GetCotizacionesPend"
  private GetProdsCotizaciones = "Admin/GetProdsCotizacion"
  private PutCotProducts = "Admin/UpdateCotProdts"

  constructor(private http: HttpClient, private routerprd: Router) { }

  public getUsers() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<User[]>(`${environment.apiUrl}/${this.datosUsuariosUrl}`, { headers });
  }

  public getEmpleados() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<Empleado[]>(`${environment.apiUrl}/${this.datosEmpleadosUrl}`, { headers });
  }

  public getClientes() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<Cliente[]>(`${environment.apiUrl}/${this.datosClientesUrl}`, { headers });
  }

  public getProductos() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<Producto[]>(`${environment.apiUrl}/${this.datosProductosUrl}`, { headers })
  }

  public getCotizacionesPend() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<Cotizacion[]>(`${environment.apiUrl}/${this.GetCotizaciones}`, { headers })
  }

  public addProducto(product: Producto): Observable<boolean> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.post<boolean>(`${environment.apiUrl}/${this.AddProductoUrl}`, product, { headers });
  }

  public getProdsCotizaciones(id: number) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.get<ProductCot[]>(`${environment.apiUrl}/${this.GetProdsCotizaciones}?idCot=${id}`, { headers });
  }

  public potCotProducts(lista: ProductCot[]) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer Token' + localStorage.getItem("token"));
    return this.http.put<boolean>(`${environment.apiUrl}/${this.PutCotProducts}`, lista, { headers });
  }

  public regresar() {
    this.routerprd.navigateByUrl("/sinsesion/login");
  }

  public cargar(archivos: string[]) {
    for (let archivo of archivos) {
      let script = document.createElement("script");
      script.src = './assets/js/' + archivo + '.js';
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }
}
