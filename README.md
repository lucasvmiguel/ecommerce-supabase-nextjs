This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Auth

Based on https://supabase.com/docs/guides/auth/auth-helpers/nextjs

## Requirements

- Supabase
- Node & NPM

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to use this project

1. Install project

```
TODO: git clone github.com/lucasvmiguel/ecommerce-supabase-nextjs
cd ecommerce-supabase-nextjs
npm install
```

2. Create `.env.local` file in the root of the project

3. Change variables of the `.env.local` file

```
NEXT_PUBLIC_SUPABASE_URL=<CHANGE>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<CHANGE>
SUPABASE_URL=<CHANGE>
SUPABASE_KEY=<CHANGE>
```

4. Run the project

```
npm run dev
```

## How to generate the types from Supabase to Typescripty

```
npx supabase login
npx supabase gen types typescript --project-id <CHANGE> --schema public > utils/supabase-types.ts
```

Reference: https://supabase.com/docs/guides/api/rest/generating-types

## Roadmap

- Product Page

  - Products database table

    - id: uuid
    - title: string
    - slug: string
    - currency: currency
    - price: float
    - brand: string
    - description: string
    - picture: Image[]
    - created_at: datetime
    - estimated_shipping_price: float (2.0)
    - estimated_shipping_delivery_days_from: integer (2.0)
    - estimated_shipping_delivery_days_to: integer (2.0)
    - taxes (3.0)
    - returnable (3.0)
    - characteristics (3.0)
    - reviews (3.0)
    - recommendations based on products (3.0)

  - Create a web page to render a product
    - render fields
    - select to add more/less quantity
    - button to add to cart
    - discounts (2.0)
    - stock (2.0)
    - selectable characteristics (2.0)
    - reviews (2.0)
    - recommendations (2.0)
    - favourites (2.0)

- Cart Page
  - Cart database table
    - id: uuid
    - customer_id: uuid
  - Cart Product database table
    - cart_id: uuid
    - product_id: uuid
    - quantity: integer
  - Cart web page to render a cart
    - render products
    - show summary price
    - remove products from cart
    - Go to checkout button
    - add or remove quantity of products in cart (2.0)
    - show summary delivery days (2.0)
    - show discounts (3.0)
    - show if it's in stock (3.0)
- Menu
  - TODO
- Footer
  - TODO
- Login page
  - TODO
- Signup page
  - TODO
- Catalog page
  - TODO
- Search page
  - TODO
- Category page
  - TODO
- Checkout page
  - TODO
- Account app
  - TODO
- Admin app
  - TODO
- Docs
  - Deployment
  - Admin app
  - Personalization
  - ...
