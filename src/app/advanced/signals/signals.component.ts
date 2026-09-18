import { Component, computed, effect, signal } from '@angular/core';
import { Url } from 'url';

interface Product {
  id: number;
  name: string;
  price: number;
  img?: Url;
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  products: Product[] = [

    {
      id: 1,
      name: 'Angular Course',
      price: 499
    },

    {
      id: 2,
      name: 'RxJS Course',
      price: 399
    },

    {
      id: 3,
      name: 'TypeScript Course',
      price: 599
    },

    {
      id: 4,
      name: 'Testing Course',
      price: 299
    }

  ]

  cartCount = signal(0);

  discount = signal(10);

  cartTotal = computed(() =>
    this.cartCount() * 499
  );

  discountedTotal = computed(() => {
    const total = this.cartCount();
    return total - (total * this.discount() / 100)
  });

  constructor(){
    effect(() => {
      console.log('Cart Count Changed',this.cartCount());
    });
  }

  addToCart(): void {
    this.cartCount.update(
      count => count + 1
    );
  }

  removeFromCart(): void {
    this.cartCount.update(
      count => Math.max(0,count - 1)
    );
  }

  reset(): void {
    this.cartCount.set(0);
  }

}
