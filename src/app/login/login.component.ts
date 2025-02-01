import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = 'Edoardo';
  password: string = '';
  autenticato: boolean = true;
  errorMsg: string = 'Spiacenti, il nome utente o la password sono errati.';
  succesMsg: string = 'Autenticazione effettuata con successo';
  titolo: string = 'Accesso & Autenticazione';
  sottoTitolo: string = 'Procedi ad inserire la user-id e la password';
  show: boolean = true;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  gestAuth = (): void => {
    console.log(this.userId);
    if (this.userId === 'Edoardo' && this.password === '123') {
      this.route.navigate(['welcome', this.userId])
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  };
}
