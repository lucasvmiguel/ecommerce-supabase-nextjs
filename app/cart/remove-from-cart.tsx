"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { Database } from "@/utils/supabase-types";

import supabase from "@/utils/supabase-client";

export type CartProduct = Database["public"]["Tables"]["cart_products"]["Row"];

type Props = {
  cartId: number;
  productId: number;
};

export default function RemoveFromCart({ cartId, productId }: Props) {
  const router = useRouter();

  const removeFromCart = async () => {
    await supabase.from("cart_products").delete().match({ cart_id: cartId, product_id: productId });
  };

  return (
    <main>
      <button onClick={() => removeFromCart()}>Remove from cart</button>
    </main>
  );
}
