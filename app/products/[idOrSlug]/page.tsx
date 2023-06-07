"use server";

import { notFound } from "next/navigation";

import AddToCart from "./add-to-cart";

type Props = {
  params: {
    idOrSlug: string;
  };
};

import { PostgrestError } from "@supabase/supabase-js";

import supabase from "@/utils/supabase-server";
import type { Database } from "@/utils/supabase-types";

export type Product = Database["public"]["Tables"]["products"]["Row"];

export async function getProduct(idOrSlug: string): Promise<{ product: Product | null; error: PostgrestError | Error | null }> {
  let response = await supabase.from("products").select().match({ slug: idOrSlug });
  if (response.error) {
    return { product: null, error: response.error };
  }

  if (response.data && response.data.length > 0) {
    return { product: response.data[0], error: null };
  }

  response = await supabase.from("products").select().match({ id: idOrSlug });
  if (response.error) {
    return { product: null, error: response.error };
  }

  if (response.data && response.data.length <= 0) {
    return { product: null, error: new Error("Product not found") };
  }

  return { product: response.data[0], error: null };
}

export default async function Page({ params }: Props) {
  const { product, error } = await getProduct(params.idOrSlug);

  if (error || !product) {
    notFound();
  }

  return (
    <main>
      <div>{params.idOrSlug}</div>
      <AddToCart product={product} />
      <div>{JSON.stringify(product)}</div>
    </main>
  );
}
