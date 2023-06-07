import "server-only";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/utils/supabase-types";

export default createServerComponentClient<Database>({ cookies });
