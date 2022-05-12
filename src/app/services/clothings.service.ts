import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ClothingsService {

    constructor(public _http : HttpClient) {}

    // Create
    create(datos : any) : Observable<any> {
        return this._http.post('https://fakestoreapi.com/products', datos);
    }

    // Read
    read(category : any) : Observable<any> {
        return this._http.get("https://fakestoreapi.com/products/category/" + category);
    }

        readSingleProduct(id : any) : Observable<any> {
            return this._http.get("https://fakestoreapi.com/products/" + id);
        }

        readAllProducts() : Observable<any> {
            return this._http.get("https://fakestoreapi.com/products");
        }

    // Update
    update(idProducto : any, datos : any) : Observable<any> {
        return this._http.put('https://fakestoreapi.com/products/' + idProducto, datos);
    }

    // Delete
    delete(idProducto : any) : Observable<any> {
        return this._http.delete('https://fakestoreapi.com/products/' + idProducto);
    }

}