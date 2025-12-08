import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Container } from "../container/container";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, Container, RouterLink],
  templateUrl: './footer.html',
  styles: ``
})
export class Footer {
  
}
