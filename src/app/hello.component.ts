import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  clicks: number = 0;

  dummyData() {
    return 'Parent Child Relationship';
  }
  buttonClick() {
    this.clicks = this.clicks + 1;
    console.log(this.clicks);
    this.countChanged.emit(this.clicks);
  }

  buttonCount() {
    return this.clicks;
  }
}
