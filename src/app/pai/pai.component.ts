import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

//dado que será passado para o filho
dadoParaFilho : string = "Filho, estude Angular!";

  constructor() { }

  ngOnInit(): void {
  }

}
