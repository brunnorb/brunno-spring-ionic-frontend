import { Injectable } from "@angular/core";
import { HttpClient } from "@Angular/common/http";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ProdutoService {

    constructor(public  http: HttpClient){};

    findByCategoria(categoriaId:string){
       return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoriaId}`);
    }

}