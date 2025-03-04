import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: any; // Recebe os dados do produto como entrada

  getRatingStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return '&#9733;'.repeat(fullStars) + '&#9734;'.repeat(emptyStars);
  }
}
