import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nomeCompleto: string = "DENNER CERQUEIRA EVANGELISTA";

  constructor() { }

  ngOnInit(): void {
  }

}
