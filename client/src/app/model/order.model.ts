import { Product } from './product.model';
import { User } from './user.model';

export interface Order {
    _id: string,
    user: User,
    product: Product,
    total: number,
    totalPay: number,
    statusOrder: string,
    createdAt?: Date,
    updatedAt?: Date
}