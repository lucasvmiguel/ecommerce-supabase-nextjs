import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/utils/supabase-types";

export default createClientComponentClient<Database>();
