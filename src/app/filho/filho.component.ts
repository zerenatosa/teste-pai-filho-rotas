import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

//dado recebido do pai
@Input() dadoRecebidoPai : string = '';

dadoRecebidoPaiViaRota : string = '';

name:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) =>{
      console.log(params)
      this.name = params.data;
      this.dadoRecebidoPaiViaRota = params.data;
      })
  }

}
