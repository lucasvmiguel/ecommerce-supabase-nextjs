"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { Database } from "@/utils/supabase-types";

import supabase from "@/utils/supabase-client";

export type Product = Database["public"]["Tables"]["products"]["Row"];

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleIncrementClick = () => {
    if (quantity === 10) {
      return;
    }
    setQuantity(quantity + 1);
  };

  const handleDecrementClick = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const addToCart = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data: carts } = await supabase.from("carts").select();
    let cart = carts?.[0];
    if (!cart) {
      const { data: cartCreated } = await supabase.from("carts").insert({ user_id: user.id }).select();
      cart = cartCreated?.[0];
    }

    await supabase.from("cart_products").insert({ cart_id: cart!.id, product_id: product.id, quantity });
  };

  return (
    <main>
      <div>{product.id}</div>
      <div>quantity: {quantity}</div>
      <button onClick={() => handleIncrementClick()}>+</button>
      <button onClick={() => handleDecrementClick()}>-</button>
      <button onClick={() => addToCart()}>Add to cart</button>
    </main>
  );
}
