import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { State } from '../shared/state.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [ ApiService ]
})
export class PainelComponent implements OnInit {

  resposta: string
  clima: any
  states: any
  citys:any = ""
  city: string
  stateSelected: string
  citySelected : string
  climaResposta: any
  temperature: number
  date: string

  constructor(private apiService: ApiService){ }


  ngOnInit(): void {
    this.stateAll()
  }

  public stateAll(): void{
    this.apiService.getState().subscribe((resposta: State[]) => {
      this.states = resposta
    })
  }

  public getClima(){
    //API Utilizada  em seu modo Free, apenas suporta uma localizacao
      this.apiService.getClima().subscribe((resposta: any) => {
      this.clima = resposta
      this.city = this.clima.name
      this.temperature = this.clima.data.temperature
      this.date = this.clima.data.date
      this.climaResposta = (`Hoje dia ${this.date}, Esta fazendo em ${this.city} ${this.temperature} graus`)
      })
  }

  public getCityByState(): void{
    this.apiService.getCityByState(this.stateSelected).subscribe((resposta: any) => {
      this.city = resposta
    })
  }


  public selecionarState(input: any){
    this.stateSelected = input.value
    this.getCityByState()
    
  }

  public atualizarValor(input: any){
    this.citySelected =  input.value.toLowerCase().replace(/\s/g, "")
  }



}
