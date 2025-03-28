import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  searchInput = '';

  search() {
    console.log(this.searchInput);
  }
}
