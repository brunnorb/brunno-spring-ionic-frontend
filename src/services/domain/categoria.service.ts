import { Injectable } from "@angular/core";
import { HttpClient } from "@Angular/common/http";
import { API_CONIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService {

    constructor(public  http: HttpClient){};

    findAll(): Observable<CategoriaDTO[]>{
      return this.http.get<CategoriaDTO[]>(`${API_CONIG.baseUrl}/categoriass`);
    };
}