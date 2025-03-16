import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card d-flex flex-column align-items-center">
      <div>
        <div class="product-name text-center">
          Un produit
        </div>
      </div>
      <button class="btn btn-primary">Ajouter au panier</button>
      @if (userAdmin) {
        <button class="btn btn-danger mt-1">Supprimer</button>
      }
    </div>
  `
})
export class CardComponent {
  userAdmin: boolean = false;
}
