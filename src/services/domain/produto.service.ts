import { Injectable } from "@angular/core";
import { HttpClient } from "@Angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { ProdutoDTO } from "../../models/produto.dto";

@Injectable()
export class ProdutoService {

    constructor(public  http: HttpClient){};

    findById(produtoId:string) {
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produtoId}`); 
    }

    findByCategoria(categoriaId:string, page:number =0, linesPerPage: number = 24){
       return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoriaId}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    getSmallImageFromBucket(id:string) : Observable<any>{
        let url = `${API_CONFIG.bucketbaseUrl}/prod${id}-small.jpg`
        return this.http.get(url, {responseType: 'blob'})
    }

    getImageFromBucket(id:string) : Observable<any>{
        let url = `${API_CONFIG.bucketbaseUrl}/prod${id}.jpg`
        return this.http.get(url, {responseType: 'blob'})
    }




}