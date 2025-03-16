import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [],
  template: `
    <div class="order-status">
      @switch (status) {
        @case ('pending') {
          <div>Commande en attente</div>
        }
        @case ('processing') {
          <div>Commande en cours de traitement</div>
        }
        @case ('shipped') {
          <div>Commande expédiée</div>
        }
        @case ('delivered') {
          <div>Commande livrée</div>
        }
        @default {
          <div>Statut de commander inconnu</div>
        }
      }
    </div>
  `
})
export class OrderStatusComponent {
  @Input() status: string = ''; // Status de la commande en tant qu'input
}
