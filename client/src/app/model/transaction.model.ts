import { Address } from './address.model';
import { Expedition } from './expedition.model';
import { Order } from './order.model';

export interface Transaction {
    _id: string,
    order: Order,
    total: number,
    payment: string,
    address: Address,
    expedition: Expedition,
    createdAt?: Date,
    updatedAt?: Date
}