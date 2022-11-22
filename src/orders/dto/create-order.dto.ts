export class CreateOrderDto {
    timestamp: Date;
    user_id: string;
    productos: [{
        id: string;
        timestamp: string;
        nombre: string;
        descripcion: string;
        codigo: string;
        foto: string;
        precio: number;
        stock: number;
        cantidad: number;
    }]

}
