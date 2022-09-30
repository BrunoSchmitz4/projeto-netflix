import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  links_list1: any = [];
  constructor() { }

  ngOnInit(): void {
    // this.links_list1 = [
    //   {navs: '..freq-ques.component.html', name:'Perguntas frequentes'},
    //   {navs: '/investors', name: 'Investidores'},
    //   {navs: '/devices', name: 'Formas de Assistir'},
    //   {navs: '/info-corp', name: 'Informações Corporativas'},
    //   {navs: '/original', name: 'Só na Netflix'}
    // ];
  }

}
