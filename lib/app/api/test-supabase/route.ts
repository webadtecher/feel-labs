import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.from("profiles").select("*").limit(1);

  if (error) {
    return new Response(JSON.stringify({ ok: false, error }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true, data }), { status: 200 });
}
