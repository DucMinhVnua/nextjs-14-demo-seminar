import FormLogin from "@/components/forms/forms.login";
import React from "react";

export const LOGIN_PATH = "/login";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl tx-white mb-[20px]">Đăng nhập</h1>
      <FormLogin />
    </div>
  );
}
