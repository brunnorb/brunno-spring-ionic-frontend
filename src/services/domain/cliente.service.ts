import { Injectable } from "@angular/core";
import { HttpClient } from "@Angular/common/http";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";

@Injectable()
export class ClienteService {

    constructor(public http:HttpClient) {

    }

    findByEmail(email:string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id:string): Observable<any> {
        let url = `${API_CONFIG.bucketbaseUrl}/cp${id}.jpg`
        return this.http.get(url,{responseType :'blob'});
    }

    insert(obj: ClienteDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/clientes`,obj,
        { observe : 'response', responseType : 'text'});}
}