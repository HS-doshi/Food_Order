import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  addTocart(food: Foods): void {
    let cartItem = this.cart.item.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.item.push(new CartItem(food))
  }

  removeFromCart(foodId: number): void {
    this.cart.item = this.cart.item.filter(item => item.food.id != foodId)
  }
  changeQuantity(foodId: number, newQuantity: number): void {
    let cartItem = this.cart.item.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = newQuantity;
    // Update the price based on the new quantity
    cartItem.price = cartItem.food.price * newQuantity;
  }

  getCart(): Cart {
    return this.cart
  }
}
