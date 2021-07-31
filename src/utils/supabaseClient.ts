import { createClient } from "@supabase/supabase-js";

const url = "https://ezohbrvxyerambgqfqjy.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzEzNzQ0OCwiZXhwIjoxOTQyNzEzNDQ4fQ.G5CyY3jkzfz7Z9BVt9wAcwlGcCahFUSQHTCGIJLaIdc";

const supabaseClient = createClient(url, key);

export default supabaseClient;
