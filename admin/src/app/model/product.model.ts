export interface Product {
    _id: string,
    name: string,
    description: string,
    gambar: string,
    price: number,
    stock: number,
    kategori: string,
    createdAt?: Date,
    updatedAt?: Date
}