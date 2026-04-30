import { Component, input, Input } from '@angular/core';
import { Link } from '../navbar/navbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'link-item',
  imports: [TranslatePipe, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './link-item.html',
  styles: `
    a{
      --link-color: red;
      --text-color: #020202;
      text-decoration: none;
      transition: all 250ms ease-out;
      color: --text-color;
    }

    
  `
})
export class LinkItem {
  
  @Input()
  hoverTextColor = "red"

  @Input()
  textColor = "#020202"

  @Input({required: true})
  link!:Link
}
