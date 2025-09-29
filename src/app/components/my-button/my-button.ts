import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  imports: [],
  templateUrl: './my-button.html',
  styles:``
})
export class MyButton {
  @Input()
  text = ""
}
