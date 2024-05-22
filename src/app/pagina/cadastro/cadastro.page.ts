import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


constructor(public nav: NavController) {}
alertButtons = ['Confirmar'];
abrirPagina(x: any){
      this.nav.navigateForward(x);
    
    }
  ngOnInit() {
  }

}
