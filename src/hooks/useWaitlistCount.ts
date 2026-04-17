import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useWaitlistCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { data } = await supabase.from("waitlist_count").select("total").maybeSingle();
      if (data?.total != null) setCount(Number(data.total));
    };
    fetchCount();

    const channel = supabase
      .channel("waitlist-changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "waitlist" }, () => {
        fetchCount();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  return count;
};
