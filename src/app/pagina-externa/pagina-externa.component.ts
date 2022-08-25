import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pagina-externa',
  templateUrl: './pagina-externa.component.html',
  styleUrls: ['./pagina-externa.component.css']
})
export class PaginaExternaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  name : any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) =>{
    console.log(params)
    this.name = params.data;
    })

  }

}
