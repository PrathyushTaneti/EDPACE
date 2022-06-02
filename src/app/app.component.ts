import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent {
  public title = 'Edpace';
  public logo = "../assets/images/SIGNIFY-2.png";

  ngOnInit() {
    // AOS.Init();
  }
}
