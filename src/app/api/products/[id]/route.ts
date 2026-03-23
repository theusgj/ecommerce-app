import { getProductbyId } from "@/domain/product/products.service";
import { NextResponse } from "next/server";

export async function GET( 
    _ : Request, 
    { params }: { params: Promise<{ id: string }> }
    ) {
    const { id } = await params;
    const product = await getProductbyId(id)

    if(!product){
        return NextResponse.json (
            { message: 'Product not found' },
            { status: 404}
        ) 
    }

    return NextResponse.json(product);
} 