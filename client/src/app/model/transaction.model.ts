import { Address } from './address.model';
import { Expedition } from './expedition.model';
import { Order } from './order.model';

export interface Transaction {
    _id: string,
    order: Order,
    totalProduct: number,
    totalPay: number,
    payment: string,
    address: Address,
    expedition: Expedition,
    status: string,
    createdAt?: Date,
    updatedAt?: Date
}