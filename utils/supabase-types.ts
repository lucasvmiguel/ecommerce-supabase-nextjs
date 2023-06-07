export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cart_products: {
        Row: {
          cart_id: number
          created_at: string | null
          product_id: number
          quantity: number
          updated_at: string
        }
        Insert: {
          cart_id: number
          created_at?: string | null
          product_id: number
          quantity: number
          updated_at?: string
        }
        Update: {
          cart_id?: number
          created_at?: string | null
          product_id?: number
          quantity?: number
          updated_at?: string
        }
      }
      carts: {
        Row: {
          created_at: string
          id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string
          user_id?: string
        }
      }
      products: {
        Row: {
          brand: string
          created_at: string
          description: string
          id: number
          pictures: string[]
          price: number
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          brand: string
          created_at?: string
          description: string
          id: number
          pictures: string[]
          price: number
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string
          id?: number
          pictures?: string[]
          price?: number
          slug?: string
          title?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
