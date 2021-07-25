
//esto es lo que se maneja en la aplicación de servidor o al lado del server
export class createProductDTO{
    readonly name: string;
    readonly descrition: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createAt?: Date;
}