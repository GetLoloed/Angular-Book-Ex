import {Component} from '@angular/core';
import {NavbarComponent} from './features/navbar/navbar.component';
import {CardComponent} from './features/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBook';
}
