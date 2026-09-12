"use client";

import { useEffect, useState } from "react";

export function useAdminMode() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const providedValue = params.get("admin")?.trim() || "";
    const expectedValue = process.env.NEXT_PUBLIC_ADMIN_SECRET?.trim() || "";

    if (providedValue.length > 0 && providedValue === expectedValue) {
      setIsAdmin(true);
    }
  }, []);

  return isAdmin;
}
