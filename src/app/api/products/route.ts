import { getAllProducts } from '@/domain/product/products.service'
import { NextResponse } from 'next/server'

export async function GET() {
  const products = await getAllProducts()
  return NextResponse.json(products)
}