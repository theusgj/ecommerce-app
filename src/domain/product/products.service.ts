import { products } from "./product.data"
import { Product } from "./product.types"

export async function getAllProducts() : Promise<Product[]> {
    return products
}

export async function getProductbyId(id: string): Promise<Product | null> {
  const product = products.find(p => p.id === id)
  return product ?? null
} 