import { User } from './user.model';

export interface Address {
    _id: string,
    user: User,
    detail: string,
    kecamatan: string,
    kabKota: string,
    provinsi: string,
    kodepos: string,
    createdAt?: Date,
    updatedAt?: Date
}