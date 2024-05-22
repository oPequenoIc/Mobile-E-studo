import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPagina(x: any){
        this.nav.navigateForward(x);
      
      }
    ngOnInit() {
    }
  
  }
