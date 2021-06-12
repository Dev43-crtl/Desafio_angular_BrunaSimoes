import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Capital } from "./shared/capital.model";
import { City } from "./shared/city.model";

import { State } from "./shared/state.model";

@Injectable({
    providedIn:'root'
})
export class ApiService{

    token = "token=58a71c999261395d3577628b13306a9d"


    constructor(private http: HttpClient){}

    public getState(): Observable<State[]>{
        return this.http.get<State[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?=true?orderBy=nome")
    }

    getClima(): any {
        return this.http.get<any>(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?${this.token}`);
    }

    getCity(): Observable<City[]>{
        return this.http.get<City[]>(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?country=BR&${this.token}`)
    }

    getCityByState(state:string): any{
        return this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
    }

    getCapitais(): Observable<Capital[]>{
        return this.http.get<Capital[]>(`https://br-cidade-estado-nodejs.glitch.me/cidades?capital=true`)
    }

}

