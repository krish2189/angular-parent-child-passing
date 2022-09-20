import { Component, ViewChild } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  @ViewChild(HelloComponent) helloValue: HelloComponent;
  count: number;

  countChangedHandlerEvent(event) {
    this.count = event;
  }

  childIncrement() {
    this.helloValue.buttonClick();
  }
}
