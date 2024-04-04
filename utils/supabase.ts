
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_KEY!
);

export async function getUserDataValue(key: string) {
    const { data, error } = await supabase
        .from("user_data")
        .select("value")
        .eq("key", key)
        .limit(1)
        .order("created_at", { ascending: false });

    if (data?.length === 0) {
        return {
            data: null,
            error: null,
        };
    }
    return {
        data: data![0].value,
        error: error !== null,
    };
}

export async function setUserDataValue(key: string, value1: any) {
    const { data, error } = await supabase
        .from("user_data")
        .update({ value: value1 })
        .eq("key", key)
        .select();

    if (data?.length === 0) {
        return {
            data: null,
            error: null,
        };
    }
    return {
        data: data![0].value,
        error: error !== null,
    };
}