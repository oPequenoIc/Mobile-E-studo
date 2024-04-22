import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'people-circle' },
    { title: 'Cadastrar', url: '/cadastro', icon: 'people' },
    { title: 'Cursos', url: '/cursos', icon: 'library' },

    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
