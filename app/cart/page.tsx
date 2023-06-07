import Link from "next/link";

import supabase from "@/utils/supabase-server";
import RemoveFromCart from "./remove-from-cart";

async function getCart() {
  return await supabase
    .from("carts")
    .select(
      `
        id,
        cart_products (
          quantity,
          product_id,
          cart_id,
          product: products ( 
            id,
            title,
            price
          )
        )
      `
    )
    .maybeSingle();
}

export default async function Page() {
  const { data: cart } = await getCart();

  return (
    <main>
      {cart?.cart_products.map((cartProduct) => (
        <div key={cartProduct.product_id}>
          <div>{cartProduct.product.title}</div>
          <div>{cartProduct.quantity}</div>
          <div>
            <RemoveFromCart cartId={cartProduct.cart_id} productId={cartProduct.product_id} />
          </div>
        </div>
      ))}
      <Link href="/checkout"></Link>
    </main>
  );
}
