import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthappService {
  constructor() {}

  autentica(userId: string, password: string): boolean {
    let retVal = userId === 'edoardo' && password === '123';
    if (retVal) {
      sessionStorage.setItem('Utente', userId);
    }
    return retVal;
  }

  loggedUser(): string | null {
    return sessionStorage.getItem('Utente')
      ? sessionStorage.getItem('Utente')
      : '';
  }

  isLogged(): boolean{
    return sessionStorage.getItem('Utente') ? true : false;
  }
}
