import { Injectable } from "@angular/core";
import { HttpClient } from "@Angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/Cidade.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService {

    constructor(public  http: HttpClient){};

    findAll(estadoID:string): Observable<CidadeDTO[]>{
      return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estadoID}/cidades`);
    };
}