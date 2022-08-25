import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

//dado que será passado para o filho
dadoParaFilho : string = "Filho, estude Angular!";
dadoParaFilhoViaRota : string ='';

  constructor(private route: Router) { }

  name:any;
  ngOnInit(): void {
  }


  navToSecondComp() {
    this.route.navigate(['pagina-externa'], {queryParams:{data:this.name}})
  }

  mensagemParaFilho(){
    this.route.navigate(['filho'], {queryParams:{data:this.dadoParaFilhoViaRota}})
  }
}
