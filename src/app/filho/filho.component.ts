import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

//dado recebido do pai
@Input() dadoRecebidoPai : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
