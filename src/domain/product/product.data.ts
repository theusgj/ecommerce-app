import { Product } from "./product.types";

export const products: Product[] = [
    {
        "id": "p-001",
        "name": "Teclado Mecánico",
        "description": "Teclado mecánico con retroiluminación RGB y switches azules.",
        "price": 129.99,
        "stock": 45,
        "imageURL": "https://example.com/images/keyboard.jpg",
        "isActive": true
    },
    {
        "id": "p-002",
        "name": "Mouse Inalámbrico",
        "description": "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
        "price": 39.5,
        "stock": 120,
        "imageURL": "https://example.com/images/mouse.jpg",
        "isActive": true
    },
    {
        "id": "p-003",
        "name": "Monitor 27 pulgadas",
        "description": "Monitor Full HD de 27 pulgadas con panel IPS.",
        "price": 249.99,
        "stock": 30,
        "imageURL": "https://example.com/images/monitor.jpg",
        "isActive": true
    },
    {
        "id": "p-004",
        "name": "Audífonos Bluetooth",
        "description": "Audífonos Bluetooth con cancelación activa de ruido.",
        "price": 89.0,
        "stock": 0,
        "imageURL": "https://example.com/images/headphones.jpg",
        "isActive": false
    },
    {
        "id": "p-005",
        "name": "Laptop Stand",
        "description": "Soporte de aluminio ajustable para laptop.",
        "price": 29.99,
        "stock": 75,
        "imageURL": "https://example.com/images/stand.jpg",
        "isActive": true
    }
]