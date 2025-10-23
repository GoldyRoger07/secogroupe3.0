import { Component, input, Input } from '@angular/core';
import { Link } from '../navbar/navbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'link-item',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './link-item.html',
  styles: `
    a{
      --link-color: red;
      text-decoration: none;
      transition: all 250ms ease-out;
    }

    
  `
})
export class LinkItem {
  
  @Input()
  color = "red"

  @Input({required: true})
  link!:Link
}
