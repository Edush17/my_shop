import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = "Edoardo"
  password: string = "";

  gestAuth = () : void => {
    console.log(this.userId);
  }

}
