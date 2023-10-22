import { Foods } from "./food";

export class CartItem {
    constructor(food: Foods) {
        this.food = food
        this.price = food.price

    }
    food: Foods;
    price: number;
    quantity: number = 1;
    getPrice(): Number {
        return this.price * this.quantity;
    }
}