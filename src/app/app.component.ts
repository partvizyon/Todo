import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Ella';
  items = [
    { description: "Kahvaltı", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Toplantı", action: "No" },
    { description: "Sinema", action: "No" },
  ];
}
