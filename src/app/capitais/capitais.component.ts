import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Capital } from '../shared/capital.model';

@Component({
  selector: 'app-capitais',
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css']
})

export class CapitaisComponent implements OnInit {


  capitais: Capital[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCapitais()
  }


  public getCapitais(): void{
    this.apiService.getCapitais().subscribe((resposta: Capital[]) => {
      this.capitais = resposta
    })
  }
}
