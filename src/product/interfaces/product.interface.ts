//esto es lo q ue se maneja en el cógigo
export interface Product {
    readonly name: string;
    readonly description: string,
    readonly imageURL: string,
    readonly price: number,
    readonly createdAt: Date;
}