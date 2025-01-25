import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my_shop';
  saluti: string = "Benvenuti in my shop";
  bollini: number = 1500;
  
}
