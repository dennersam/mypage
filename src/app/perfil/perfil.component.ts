import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  idade: string = "34";

  constructor() { }

  ngOnInit(): void {
  }

}
