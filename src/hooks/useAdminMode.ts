"use client";

import { useMemo } from "react";

export function useAdminMode() {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const params = new URLSearchParams(window.location.search);
    const providedValue = params.get("admin")?.trim() || "";
    const expectedValue = process.env.NEXT_PUBLIC_ADMIN_SECRET?.trim() || "";

    return providedValue.length > 0 && providedValue === expectedValue;
  }, []);
}
