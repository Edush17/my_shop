import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';
  autenticato: boolean = true;
  errMsg: string = 'Spiacenti, il nome utente o la password sono errati.';
  succesMsg: string = 'Autenticazione effettuata con successo';
  titolo: string = 'Accesso & Autenticazione';
  sottoTitolo: string = 'Procedi ad inserire la user-id e la password';
  show: boolean = true;

  constructor(private route: Router, private authappService: AuthappService) {}

  ngOnInit(): void {}

  gestAuth = (): void => {
    this.autenticato = this.authappService.autentica(this.userId, this.password);
    if (this.autenticato === true){
      this.route.navigate(['welcome', this.userId]);
    }
  };
}
