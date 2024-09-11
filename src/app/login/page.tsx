"use client";

import FormLogin from "@/components/forms/forms.login";
import { cookies } from "next/headers";
import { useMemo } from "react";

export const LOGIN_PATH = "/login";

export default function LoginPage() {
  const cookieStore = cookies();

  const hasCookieInStore = useMemo(
    () => cookieStore.get("token"),
    [cookieStore]
  );

  console.log(hasCookieInStore);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl tx-white mb-[20px]">Đăng nhập</h1>
      <FormLogin />
    </div>
  );
}
