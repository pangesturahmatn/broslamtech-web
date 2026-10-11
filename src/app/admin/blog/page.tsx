"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminBlogRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/admin");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#070B14] flex items-center justify-center text-slate-400 text-xs">
      Mengarahkan ke Panel Kontrol Admin Terpadu...
    </div>
  );
}
