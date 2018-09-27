import { Injectable } from "@angular/core";
import { HttpClient } from "@Angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProdutoService {

    constructor(public  http: HttpClient){};

    findByCategoria(categoriaId:string){
       return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoriaId}`);
    }

    getSmallImageFromBucket(id:string) : Observable<any>{
        let url = `${API_CONFIG.bucketbaseUrl}/prod${id}-small.jpg`
        return this.http.get(url, {responseType: 'blob'})
    }
    
}