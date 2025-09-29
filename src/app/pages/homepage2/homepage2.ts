import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { MyButton } from '../../components/my-button/my-button';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-homepage2',
  standalone: true,
  imports: [Navbar, MyButton, Footer],
  templateUrl: './homepage2.html'
})
export class Homepage2Component {

}
