import { Product } from './product.model';
import { User } from './user.model';

export interface Order {
    _id: string,
    user: User,
    orders: Product[],
    totalPay: number,
    createdAt?: Date,
    updatedAt?: Date
}