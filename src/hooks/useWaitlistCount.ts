import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useWaitlistCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true;

    const fetchCount = async () => {
      try {
        const { data, error } = await supabase
          .from("waitlist_count")
          .select("total")
          .maybeSingle();
        if (error) {
          console.warn("Failed to fetch waitlist count:", error.message);
          return;
        }
        if (mounted && data?.total != null) {
          setCount(Number(data.total));
        }
      } catch (err) {
        console.warn("Waitlist count fetch error:", err);
      }
    };
    fetchCount();

    const channel = supabase
      .channel("waitlist-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "waitlist" },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return count;
};
